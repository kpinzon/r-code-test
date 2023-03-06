import { Account } from './account.model';

describe('Account model', () => {
  const mockId = 1000;
  let testAccount: Account;

  beforeEach(() => {
    testAccount = new Account(mockId);
  });

  describe('get id', () => {
    it('should return the accounts id', () => {
      expect(testAccount.id).toBe(1000);
    });
  });

  describe('deposit', () => {
    const originalBalance = 500;

    beforeEach(() => {
      testAccount.balance = originalBalance;
    });
    it('should set balance correctly if deposit is $10,000 or less', () => {
      const amount = 10000;
      const expectedBalance = testAccount.balance + amount;

      testAccount.deposit(amount);
      expect(testAccount.balance).toEqual(expectedBalance);
    });

    it('should return undefined and NOT set the balance if deposit is over 10,000', () => {
      const amount = 10001;
      const spy = jest.spyOn(testAccount, 'deposit');

      testAccount.deposit(amount);

      expect(spy).toHaveReturnedWith(undefined);
      expect(testAccount.balance).toEqual(originalBalance);

      spy.mockRestore();
    });
  });

  describe('withdraw', () => {

    describe('withdrawal where the $100 min balance is the max withdraw', () => {
      const originalBalance = 500;

      beforeEach(() => {
        testAccount.balance = originalBalance;
      });

      it('should set the balance correctly if balance will stay $100 or more (400 or less withdrawal)', () => {
        const amount = 400;
        const expectedBalance = testAccount.balance - amount;
        testAccount.withdraw(amount);
        expect(testAccount.balance).toEqual(expectedBalance);
      });

      it('should return undefined and balance should remain unchanged when its an amount that would put balance below $100', () => {
        const amount = 450;
        const spy = jest.spyOn(testAccount, 'withdraw');
        testAccount.withdraw(amount);

        expect(spy).toHaveReturnedWith(undefined);
        expect(testAccount.balance).toEqual(originalBalance);

        spy.mockRestore();
      });

    });

    describe('withdrawal where the $100 min balance and 90% max withdrawal are the limiting maximum', () => {
      const originalBalance = 1000;

      beforeEach(() => {
        testAccount.balance = originalBalance;
      });

      it('should set the balance correctly if balance will stay $100 or more ($900 max) and withdrawal is not over 90% of balance ($900 max)', () => {
        const amount = 900;
        const expectedBalance = testAccount.balance - amount;
        testAccount.withdraw(amount);
        expect(testAccount.balance).toEqual(expectedBalance);
      });

      it('should return undefined and balance should remain unchanged when its an amount that would put balance below $100 AND is a withdrawal over 90% of current balance', () => {
        const amount = 910;
        const spy = jest.spyOn(testAccount, 'withdraw');
        testAccount.withdraw(amount);

        expect(spy).toHaveReturnedWith(undefined);
        expect(testAccount.balance).toEqual(originalBalance);

        spy.mockRestore();
      });
    });

    describe('withdrawal where 90% of balance is the max withdraw', () => {
      const originalBalance = 2000;

      beforeEach(() => {
        testAccount.balance = originalBalance;
      });

      it('should set the balance correctly if the withdrawal is 90% of the balance or less ($1800 max)', () => {
        const amount = 1800;
        const expectedBalance = testAccount.balance - amount;
        testAccount.withdraw(amount);
        expect(testAccount.balance).toEqual(expectedBalance);
      });

      it('should return undefined and balance should remain unchanged when the withdrawal amount is more than 90% of the balance (would put balance at $100 here)', () => {
        const amount = 1900;
        const spy = jest.spyOn(testAccount, 'withdraw');
        testAccount.withdraw(amount);

        expect(spy).toHaveReturnedWith(undefined);
        expect(testAccount.balance).toEqual(originalBalance);

        spy.mockRestore();
      });

    });

  });
});
