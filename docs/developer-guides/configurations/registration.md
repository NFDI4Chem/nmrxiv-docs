---
sidebar_position: 2
id: registration
title: Registration
---

The registration process in nmrXiv is built on [Laravel Jetstream](https://jetstream.laravel.com/2.x/features/registration.html) which provides a registration view and a corresponding action that handles the user registrations.
If you wish to manage additional information about the user, this page will walk you through how the current profile registration form can be extended.
To achieve this lets go step by step and see which classes are responsible for the registration process and what changes are required.

* **Actions**: As typical of most Jetstream features, the logic executed to satisfy registration and profile update requests can be found in an action class within the application. Any customizations you wish to make to the application user creation and profile updation should be made in the below classes:
    * `App\Actions\Fortify\CreateNewUser` - This class will be invoked when a userregisters in the application. Therefore, any customizations you wish to make to user creation logic should be made in this class, including the updated profile photo if applicable.
    * `App\Actions\Fortify\UpdateUserProfileInformation` - This class will be invoked when the user updates their profile. This action is responsible for validating the input and updating the user's profile information.    
    
  When invoked, both of the actions above receive the currently authenticated `$user` and an array of `$input` that contains all of the input from the incoming request.

* **Model**:  Add the new field to the corresponding object for the User i-e `app\Models\User.php`. 

* **Database** - In order to persist your data to the database, the new field should be updated to the migration file. Migrations are nothing but a version control for the database, and the corresponding migration file could be found under database/migrations as `_create_users_table.php` and `_update_users_table.php`.

* **View/Pages** - The registration and update profile view is displayed using the below Vue templates. Each of these templates will receive the entire authenticated user object so that you can add additional fields to these forms as necessary. Any additional inputs added to the forms will be included in the `$input` array that is passed to the respective actions above.
    * `resources/js/Pages/Auth/Register.vue` - Registration form view.
    * `resources/js/Pages/Profile/Partials/UpdateProfileInformationForm.vue` - Profile update view.

Follow the link to learn more about [Jetstream](https://jetstream.laravel.com/2.x/introduction.html) [Vue](https://vuejs.org/) and [Laravel](https://laravel.com/docs/).
