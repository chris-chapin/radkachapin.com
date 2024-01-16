class Footer extends HTMLElement {
  connectedCallback() {
    const year = new Date().getFullYear();
    const copyright = `Copyright \u00A9 2015-${year} Radka Chapin Counseling PLLC | Redmond, WA`;

    this.innerHTML = `
    <center>
      <p style="font-size:16px;">
        <a href="/.">Home</a> | 
        <a href="/about">About</a> | <a href="/specialties">Specialties</a> | 
        <a href="/forms">Forms</a> | <a href="/insurance">Insurance</a> | 
        <a href="/contact">Contact</a> | 
        <a href="/resources">Resources</a>
    </p>
    <br />
    <p>
    <a href="mailto:radka@radkachapin.com">radka@radkachapin.com</a>
    </p>
    <br />
    <p>${copyright}</p>
    <br />
    </center>`;
  }
}

customElements.define("my-footer", Footer);
