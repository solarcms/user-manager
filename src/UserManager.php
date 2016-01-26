<?php
/**
 * Created by PhpStorm.
 * User: n0m4dz
 * Date: 11/10/15
 * Time: 4:26 PM
 */

namespace Solarcms\UserManager;

class UserManager
{
    public static function hello()
    {
        return config('usermanager.user');
    }

}