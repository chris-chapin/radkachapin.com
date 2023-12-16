class Header extends HTMLElement {
  connectedCallback() {
    let selectedMenuItem = `home-menu-item`;

    if (location.pathname != "/") {
      selectedMenuItem = `${location.pathname.replaceAll("/", "")}-menu-item`;
    }

    this.innerHTML = `
    <header id="masthead" class="site-header" role="banner">
      <hgroup>
        <h1 class="site-title">
          <a
            href="https://radkachapin.com/"
            title="Radka Chapin Counseling"
            rel="home"
            >Radka Chapin Counseling</a>
        </h1>
        <h2 class="site-description">Radka Chapin Counseling</h2>
      </hgroup>
      <nav id="site-navigation" class="main-navigation" role="navigation">
        <a href="https://radkachapin.com/">
          <img
            src="https://radkachapin.com/wp-content/uploads/2016/05/cropped-combined-banner-2.jpg"
            align="center"
            class="header-image"
            width="379"
            height="167"
            alt="Radka Chapin Counseling"
          />
        </a>
        <button class="menu-toggle">Menu</button>
        <a class="assistive-text" href="#content" title="Skip to content">Skip to content</a>
        <ul id="menu-main-menu" class="nav-menu">
          <li
            id="home-menu-item"
            class="menu-item menu-item-type-post_type menu-item-object-page home-menu-item"
          >
          <a href="/.">Home</a>
          </li>
          <li
            id="about-menu-item"
            class="menu-item menu-item-type-post_type menu-item-object-page about-menu-item"
          >
            <a href="/about">About</a>
          </li>
          <li
            id="specialties-menu-item"
            class="menu-item menu-item-type-post_type menu-item-object-page specialties-menu-item"
          >
            <a href="/specialties">Specialties</a>
          </li>
          <li
            id="forms-menu-item"
            class="menu-item menu-item-type-post_type menu-item-object-page forms-menu-item"
          >
            <a href="/forms">Forms</a>
          </li>
          <li
            id="insurance-menu-item"
            class="menu-item menu-item-type-post_type menu-item-object-page insurance-menu-item"
          >
            <a href="/insurance">Insurance</a>
          </li>
          <li
            id="contact-menu-item"
            class="menu-item menu-item-type-post_type menu-item-object-page contact-menu-item"
          >
            <a href="/contact">Contact</a>
          </li>
          <li
            id="resources-menu-item"
            class="menu-item menu-item-type-post_type menu-item-object-page resources-menu-item"
          >
            <a href="/resources">Resources</a>
          </li>
        </ul>
      </nav>
    </header>`;

    const selectedMenuItemElement = document.getElementById(selectedMenuItem);

    selectedMenuItemElement.classList.add("current-menu-item");
    selectedMenuItemElement.classList.add("current_page_item");
    selectedMenuItemElement
      .getElementsByTagName("a")[0]
      .setAttribute("aria-current", "page");
  }
}

customElements.define("my-header", Header);
