<div class="white box-shadow-z1 b-b">
    <div class="navbar">
        <ul class="nav navbar-nav pull-left hidden-lg-up">
            <li class="nav-item">
                <a data-toggle="modal" data-target="#aside"
                   class="nav-link p-r b-r">
                    <i class="material-icons">menu</i>
                </a>
            </li>
        </ul>

        <div class="navbar-item pull-left h6 p-l" id="pageTitle">Хэрэглэгчид</div>

        <ul class="nav navbar-nav pull-left hidden-md-down">
            <li class="nav-item">
                <a class="nav-link text-success" data-toggle="modal" data-target="#right-panel" ui-toggle-class="modal-open-aside" ui-target="body">
                    <span>
                        <i class="material-icons">&#xE145;</i>
                        Нэмэх
                    </span>
                </a>
            </li>
        </ul>

        <ul class="nav navbar-nav pull-right">
            <li class="nav-item">
                <a class="nav-link" href="">
                    <span class="avatar w-32">
                        <img src="{{ URL::asset('images/avatar.gif')}}" alt="...">
                        <i class="on b-white bottom"></i>
                    </span>
                    <span class="hidden-md-down nav-text m-l-sm text-left">
                        <span class="_500">Tseegii Tselmeg</span>
                        <small class="text-muted">Administrator</small>
                    </span>
                </a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link p-l b-l" href="" data-toggle="dropdown">
                    <i class="material-icons">&#xE5D4;</i>
                </a>

                <div class="dropdown-menu dropdown-menu-scale pull-right text-color"
                     role="menu">
                    <a class="dropdown-item" href="">Action</a>
                    <a class="dropdown-item" href="">Another action</a>
                    <a class="dropdown-item" href="">Something else here</a>

                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="">Separated link</a>
                </div>
            </li>
        </ul>
    </div>
</div>