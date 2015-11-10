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
        include __DIR__ . '/routes.php';


        // For publishing configuration file
        $this->publishes([
            __DIR__ . '/Config/usermanager.php' => config_path('solar_usermanager.php'),
        ], 'config');
    }

    /**
     * Register the service provider.
     *
     * @return void
     */
    public function register()
    {

        $this->mergeConfigFrom(__DIR__ . '/Config/usermanager.php', 'UserManager');

        // View
        $this->loadViewsFrom(__DIR__ . '/Resources/Views', 'UserManager');

        $this->app['UserManager'] = $this->app->share(function ($app) {
            return new UserManager;
        });
    }
}