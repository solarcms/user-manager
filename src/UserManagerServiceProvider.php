<?php

namespace Solarcms\UserManager;

use Illuminate\Support\ServiceProvider as ServiceProvider;

class UserManagerServiceProvider extends ServiceProvider
{


    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {

        // Route
        include __DIR__ . DIRECTORY_SEPARATOR .'routes.php';


        // For publishing configuration file
        $this->publishes([
            __DIR__ . DIRECTORY_SEPARATOR .'Config'. DIRECTORY_SEPARATOR .'usermanager.php' => config_path('userconfig.php'),
        ], 'userconfig');

        // For publishing migrations
        $this->publishes([
            __DIR__. DIRECTORY_SEPARATOR . 'Migrations' => base_path('database' . DIRECTORY_SEPARATOR . 'migrations')
        ], 'usermigrate');

        // For publishing assets
        $this->publishes([
            __DIR__ . DIRECTORY_SEPARATOR . 'Assets'. DIRECTORY_SEPARATOR . 'dist' => public_path('assets'. DIRECTORY_SEPARATOR .'user'),
        ], 'userasset');
    }

    /**
     * Register the service provider.
     *
     * @return void
     */
    public function register()
    {
        $this->mergeConfigFrom(__DIR__ . DIRECTORY_SEPARATOR .'Config'. DIRECTORY_SEPARATOR .'usermanager.php', 'UserManager');

        // View
        $this->loadViewsFrom(__DIR__ . DIRECTORY_SEPARATOR .'Views', 'UserManager');

        $this->app['UserManager'] = $this->app->share(function ($app) {
            return new UserManager;
        });
    }
}