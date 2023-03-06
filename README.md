# RadancyCodingTest

## Notes

Created account view widgets and separate withdrawal and deposit widgets. Probably a bit overkill, but worked under assumption this was a real project where things would get larger over time so separating them out now might be beneficial (however didnt separate out account maintenance as it was just a single button).

Wanted to create a custom validator for withdrawing form validation but time constraint meant it would just be easier to put the logic in the withdrawal widget and calculate maximums there.

Would create a confirmation dialog for deleting accounts, but opted not to due to time constraints.

Opted to not spend too much time with styling and making it pretty due to time constraints.

Only wrote business tests using Jest in the Account model and only for the business requirements. Test for the getters and setters, as well as all the other components (including form validation) could be done but only did business requirements tests on Account class due to time constraints.

Opted to not create a success or error snackbar or toast message due to time constraints - form validation gives error messages and prevents deposits/withdrawals that go against business requirements.

## CLI
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via Jest.
