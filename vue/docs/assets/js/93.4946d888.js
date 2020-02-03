(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{503:function(r,n,e){"use strict";e.r(n),n.default='<template>\r\n  <div>\r\n    <CAlert color="primary">\r\n      This is info alert.\r\n    </CAlert>\r\n    <CAlert color="warning" closeButton>\r\n      This is warning dismissible alert.\r\n    </CAlert>\r\n    <CAlert\r\n      color="danger"\r\n      :show.sync="currentAlertCounter"\r\n      closeButton\r\n    >\r\n      This alert will close after {{currentAlertCounter}} seconds.\r\n      <CProgress\r\n        :max="10"\r\n        :value="currentAlertCounter"\r\n        height="3px"\r\n        color="danger"\r\n        animate\r\n      />\r\n    </CAlert>\r\n    <CButton\r\n      color="primary"\r\n      v-if="!currentAlertCounter"\r\n      @click="currentAlertCounter = 10"\r\n    >\r\n      Show alert with timer\r\n    </CButton>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  data () {\r\n    return {\r\n      currentAlertCounter: 10\r\n    }\r\n  }\r\n}\r\n<\/script>\r\n'},504:function(r,n,e){"use strict";e.r(n),n.default='<template>\r\n  <div>\r\n    <CBadge color="primary"> Primary color badge</CBadge>\r\n    <CBadge color="success"> success color badge</CBadge>\r\n    <CBadge color="warning"> warning color badge</CBadge>\r\n    <CBadge color="danger"> danger color badge</CBadge>\r\n    <CBadge color="secondary"> secondary color badge</CBadge>\r\n    <CBadge>Raw badge</CBadge>\r\n    <CBadge color="primary" shape="pill">Pill badge</CBadge>\r\n    <CBadge color="info" href="https://coreui.io/">\r\n      Link Badge\r\n    </CBadge>\r\n  </div>\r\n</template>\r\n'},505:function(r,n,e){"use strict";e.r(n),n.default="<template>\r\n  <div>\r\n    Standard breadcrumb:\r\n    <CBreadcrumb :items=\"items\"/>\r\n    Customized breadcrumb:\r\n    <CBreadcrumb :items=\"customizedItems\" />\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  data () {\r\n    return {\r\n      items: [\r\n        {\r\n          text: 'This is a router link',\r\n          to: '/components/Breadcrumb.html'\r\n        },\r\n        {\r\n          text: 'This is a link without actions'\r\n        },\r\n        {\r\n          text: 'This is a span'\r\n        }\r\n      ],\r\n      customizedItems: [\r\n        {\r\n          text: 'This is a link with additional class and props',\r\n          addClasses: 'font-xl',\r\n          href: 'https://coreui.io/',\r\n          target: '_blank'\r\n        },\r\n        {\r\n          text: 'This is a styled span',\r\n          addClasses: 'font-xl text-success'\r\n        }\r\n      ]\r\n    }\r\n  }\r\n}\r\n<\/script>\r\n"},506:function(r,n,e){"use strict";e.r(n),n.default="<template>\r\n  <div>\r\n    Sizes:\r\n    <template v-for=\"(size, rowKey) in ['sm', '', 'lg']\">\r\n      <CRow :key=\"rowKey + 'sizes'\" class=\"d-flex justify-content-between\">\r\n        <template v-for=\"(color, key) in ['success', 'primary', 'info', 'warning', 'danger']\">\r\n          <CButton\r\n            :key=\"color + size\"\r\n            :color=\"color\"\r\n            :size=\"size\"\r\n            class=\"m-2\"\r\n          >\r\n            {{color}}\r\n          </CButton>\r\n        </template>\r\n      </CRow>\r\n    </template>\r\n    Styles:\r\n    <template v-for=\"(prop, rowKey) in\r\n      [{ shape: 'square' }, { shape: 'pill' }, { variant: 'ghost' }, { variant: 'outline' }]\">\r\n      <CRow :key=\"rowKey + 'styles'\" class=\"d-flex justify-content-between\">\r\n        <template v-for=\"(color, key) in ['success', 'primary', 'info', 'warning', 'danger']\">\r\n          <CButton\r\n            :key=\"color\"\r\n            :color=\"color\"\r\n            v-bind=\"prop\"\r\n            class=\"m-2\"\r\n          >\r\n            {{color}}\r\n          </CButton>\r\n        </template>\r\n      </CRow>\r\n    </template>\r\n  </div>\r\n</template>\r\n"},507:function(r,n,e){"use strict";e.r(n),n.default='<template>\r\n  <CRow>\r\n    <CCol cols="1">\r\n      <CButtonClose/>\r\n    </CCol>\r\n    <CCol cols="1">\r\n      <CButtonClose buttonClasses="bg-primary close"/>\r\n    </CCol>\r\n    <CCol cols="1">\r\n      <CButtonClose buttonClasses="bg-info close"/>\r\n    </CCol>\r\n    <CCol cols="1">\r\n      <CButtonClose buttonClasses="bg-success close"/>\r\n    </CCol>\r\n    <CCol cols="1">\r\n      <CButtonClose buttonClasses="bg-warning close"/>\r\n    </CCol>\r\n    <CCol cols="1">\r\n      <CButtonClose buttonClasses="bg-danger close"/>\r\n    </CCol>\r\n    <CCol cols="1">\r\n      <CButtonClose buttonClasses="text-primary close"/>\r\n    </CCol>\r\n    <CCol cols="1">\r\n      <CButtonClose buttonClasses="text-info close"/>\r\n    </CCol>\r\n    <CCol cols="1">\r\n      <CButtonClose buttonClasses="text-success close"/>\r\n    </CCol>\r\n    <CCol cols="1">\r\n      <CButtonClose buttonClasses="text-danger close"/>\r\n    </CCol>\r\n\r\n    <CCol cols="2">\r\n      <CButtonClose buttonClasses="text-white close bg-primary p-1">\r\n        Close\r\n      </CButtonClose>\r\n    </CCol>\r\n  </CRow>\r\n</template>\r\n'},508:function(r,n,e){"use strict";e.r(n),n.default='<template>\r\n  <div>\r\n    <CButtonGroup>\r\n      <CButton color="success">Button</CButton>\r\n      <CButton color="info">Button</CButton>\r\n      <CButton color="primary">Button</CButton>\r\n    </CButtonGroup>\r\n  </div>\r\n</template>\r\n'},509:function(r,n,e){"use strict";e.r(n),n.default='<template>\r\n  <div>\r\n    Standard toolbar:\r\n    <CButtonToolbar>\r\n      <CButton color="success">Button</CButton>\r\n      <CButton color="info">Button</CButton>\r\n      <CButton color="primary">Button</CButton>\r\n    </CButtonToolbar>\r\n    </br>\r\n    Justified toolbar:\r\n    <CButtonToolbar justify>\r\n      <CButton color="success">Button</CButton>\r\n      <CButton color="info">Button</CButton>\r\n      <CButton color="primary">Button</CButton>\r\n    </CButtonToolbar>\r\n  </div>\r\n</template>\r\n'},510:function(r,n,e){"use strict";e.r(n),n.default='<template>\r\n  <CRow>\r\n    <CCol col="12" sm="6">\r\n      <CCallout color="info">\r\n        <small class="text-muted">New Clients</small><br>\r\n        <strong class="h4">9,123</strong>\r\n      </CCallout>\r\n    </CCol>\r\n    <CCol col="12" sm="6">\r\n      <CCallout color="danger">\r\n        <small class="text-muted">Recurring Clients</small><br>\r\n        <strong class="h4">22,643</strong>\r\n      </CCallout>\r\n    </CCol>\r\n  </CRow>\r\n</template>\r\n'},511:function(r,n,e){"use strict";e.r(n),n.default='<template>\r\n  <div>\r\n    <CRow>\r\n      <CCol sm="6">\r\n        <CCard>\r\n          <CCardHeader>\r\n            Standard usage\r\n          </CCardHeader>\r\n          <CCardBody>\r\n            This content is in card body component.\r\n          </CCardBody>\r\n          <CCardFooter>\r\n            Standard Footer.\r\n          </CCardFooter>\r\n        </CCard>\r\n      </CCol>\r\n      <CCol sm="6">\r\n        <CCard bodyWrapper>\r\n          Content is rendered inside CCardBody component.\r\n        </CCard>\r\n      </CCol>\r\n    </CRow>\r\n  </div>\r\n</template>\r\n'},512:function(r,n,e){"use strict";e.r(n),n.default='<template>\r\n  <CCarousel\r\n    arrows\r\n    indicators\r\n    animate\r\n    height="450px"\r\n  >\r\n    <CCarouselItem\r\n      captionHeader="First Slide"\r\n      image="https://picsum.photos/1024/480/?image=52"\r\n      captionText="Nulla vitae elit libero, a pharetra augue mollis interdum."\r\n    />\r\n    <CCarouselItem\r\n      captionHeader="Blank page"\r\n      :image="{ placeholderColor: \'grey\' }"\r\n      captionText="Nulla vitae elit libero, a pharetra augue mollis interdum."\r\n    />\r\n    <CCarouselItem\r\n     image="https://picsum.photos/1024/480/?image=54"\r\n    />\r\n  </CCarousel>\r\n</template>\r\n'},513:function(r,n,e){"use strict";e.r(n),n.default='<template>\r\n  <CChartBar\r\n    style="height:300px"\r\n    :datasets="[\r\n      {\r\n        data: [10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12],\r\n        backgroundColor: \'#E55353\',\r\n        label: \'Sales\',\r\n      }\r\n    ]"\r\n    labels="months"\r\n    :options="{ maintainAspectRatio: false }"\r\n  />\r\n</template>\r\n'},514:function(r,n,e){"use strict";e.r(n),n.default='<template>\r\n  <div>\r\n    <CButton @click="collapse = !collapse" color="primary">\r\n      Toggle Collapse\r\n    </CButton>\r\n    <CCollapse :show="collapse" class="mt-2">\r\n      <CCard body-wrapper>\r\n        <p class="card-text">Collapse contents Here</p>\r\n        <CButton  \r\n          @click="innerCollapse = !innerCollapse" \r\n          size="sm" \r\n          color="secondary"\r\n        >\r\n          Toggle Inner Collapse\r\n        </CButton>\r\n        <CCollapse :show="innerCollapse" class="mt-2">\r\n          <CCard body-wrapper>Hello!</CCard>\r\n        </CCollapse>\r\n      </CCard>\r\n    </CCollapse>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  data () {\r\n    return {\r\n      collapse: false,\r\n      innerCollapse: false\r\n    }\r\n  }\r\n}\r\n<\/script>'},515:function(r,n,e){"use strict";e.r(n),n.default='<template>\r\n  <CDropdown\r\n    color="primary"\r\n    toggler-text="Dropdown Button" \r\n    class="m-2"\r\n  >\r\n    <CDropdownItem>First Action</CDropdownItem>\r\n    <CDropdownItem>Second Action</CDropdownItem>\r\n    <CDropdownItem>Third Action</CDropdownItem>\r\n    <CDropdownDivider></CDropdownDivider>\r\n    <CDropdownItem>Something else here...</CDropdownItem>\r\n    <CDropdownItem disabled>Disabled action</CDropdownItem>\r\n  </CDropdown>\r\n</template>\r\n'},516:function(r,n,e){"use strict";e.r(n),n.default='<template>\r\n  <div>\r\n    <h4>With all element covered with default spinner:</h4>\r\n    <div class="position-relative">\r\n      <CMedia>\r\n        <h5 class="mt-0">Media Title</h5>\r\n        <p class="mb-0">\r\n          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.\r\n          Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc\r\n          ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\r\n        </p>\r\n      </CMedia>\r\n      <CElementCover :opacity="0.8"/>\r\n    </div>\r\n    <h4>Only part of element covered with custom content:</h4>\r\n    <div class="position-relative">\r\n      <CMedia>\r\n        <h5 class="mt-0">Media Title</h5>\r\n        <p class="mb-0">\r\n          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.\r\n          Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc\r\n          ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\r\n        </p>\r\n      </CMedia>\r\n      <CElementCover \r\n        :boundaries="[{ sides: [\'top\', \'left\'], query: \'.media-body\' }]"\r\n        :opacity="0.8"\r\n      >\r\n        <h1 class="d-inline">Loading... </h1><CSpinner size="5xl" color="success"/>\r\n      </CElementCover>\r\n    </div>\r\n  </div>\r\n</template>'},517:function(r,n,e){"use strict";e.r(n),n.default='<template>\r\n  <CEmbed\r\n    tag="p"\r\n    aspect="16by9"\r\n    src="https://www.youtube.com/embed/kS2rLOF5has"\r\n    frameborder="0"\r\n    allow="accelerometer;autoplay; encrypted-media; gyroscope; picture-in-picture"\r\n  />\r\n</template>\r\n'},518:function(r,n,e){"use strict";e.r(n),n.default='<template>\r\n  <div>\r\n    <CRow>\r\n      <CCol sm="12">\r\n        <CInput\r\n          label="Name"\r\n          placeholder="Enter your name"\r\n        />\r\n      </CCol>\r\n    </CRow>\r\n    <CRow>\r\n      <CCol sm="12">\r\n        <CInput\r\n          label="Credit Card Number"\r\n          placeholder="0000 0000 0000 0000"\r\n        />\r\n      </CCol>\r\n    </CRow>\r\n    <CRow>\r\n      <CCol sm="4">\r\n        <CSelect\r\n          label="Month"\r\n          :options="[1,2,3,4,5,6,7,8,9,10,11,12]"\r\n        />\r\n      </CCol>\r\n      <CCol sm="4">\r\n        <CSelect\r\n          label="Year"\r\n          :options="[2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025]"\r\n        />\r\n      </CCol>\r\n      <CCol sm="4">\r\n        <CInput\r\n          label="CVV/CVC"\r\n          placeholder="123"\r\n        />\r\n      </CCol>\r\n    </CRow>\r\n  </div>\r\n</template>\r\n'},519:function(r,n,e){"use strict";e.r(n),n.default='<template>\r\n  <CContainer>\r\n    <CRow>\r\n      <CCol lg="5" class="bg-success py-3">\r\n        col-lg-5\r\n      </CCol>\r\n      <CCol md="4" class="bg-warning py-3">\r\n        col-md-4\r\n      </CCol>\r\n      <CCol sm="3" class="bg-danger py-3">\r\n        col-sm-3\r\n      </CCol>\r\n    </CRow>\r\n  </CContainer>\r\n</template>\r\n'},520:function(r,n,e){"use strict";e.r(n),n.default='<template>\r\n  <CImg\r\n    src="https://picsum.photos/1024/480/?image=54"\r\n    block\r\n    class="mb-2"\r\n  />\r\n</template>\r\n'},521:function(r,n,e){"use strict";e.r(n),n.default='<template>\r\n  <CJumbotron>\r\n    <h1 class="display-3">Bootstrap 4</h1>\r\n    <p class="lead">Bootstrap 4 Components for Vue.js 2.6+</p>\r\n    <p>For more information visit website</p>\r\n    <CButton color="primary" href="https://coreui.io/" target="_blank">More Info</CButton>\r\n  </CJumbotron>\r\n</template>\r\n'},522:function(r,n,e){"use strict";e.r(n),n.default='<template>\r\n  <CRow>\r\n    <CCol lg>\r\n      <CLink\r\n        href="https://coreui.io"\r\n        target="_blank"\r\n      >\r\n        Normal external link.\r\n      </CLink>\r\n    </CCol>\r\n    \x3c!-- <CCol lg>\r\n      <CLink to="#features">\r\n        Router link.\r\n      </CLink>\r\n    </CCol> --\x3e\r\n    \x3c!-- <CCol lg>\r\n      <CLink disabled>\r\n        Disabled link without action\r\n      </CLink>\r\n    </CCol> --\x3e\r\n    <CCol lg>\r\n      <CLink\r\n        class="text-white bg-info px-2"\r\n        href="https://coreui.io"\r\n        target="_blank"\r\n      >\r\n        Custom link.\r\n      </CLink>\r\n    </CCol>\r\n  </CRow>\r\n</template>\r\n'},523:function(r,n,e){"use strict";e.r(n),n.default='<template>\r\n  <CListGroup>\r\n    <CListGroupItem href="#">\r\n      This is a default list group item\r\n    </CListGroupItem>\r\n    <CListGroupItem href="#" color="primary">\r\n      This is a primary list group item\r\n    </CListGroupItem>\r\n    <CListGroupItem href="#" color="secondary">\r\n      This is a secondary list group item\r\n    </CListGroupItem>\r\n    <CListGroupItem href="#" color="success">\r\n      This is a success list group item\r\n    </CListGroupItem>\r\n    <CListGroupItem href="#" color="danger">\r\n      This is a danger list group item\r\n    </CListGroupItem>\r\n    <CListGroupItem href="#" color="warning">\r\n      This is a warning list group item\r\n    </CListGroupItem>\r\n    <CListGroupItem href="#" color="info">\r\n      This is a info list group item\r\n    </CListGroupItem>\r\n    <CListGroupItem href="#" color="light">\r\n      This is a light list group item\r\n    </CListGroupItem>\r\n    <CListGroupItem href="#" color="dark">\r\n      This is a dark list group item\r\n    </CListGroupItem>\r\n  </CListGroup>\r\n</template>\r\n'},524:function(r,n,e){"use strict";e.r(n),n.default='<template>\r\n  <CMedia>\r\n    <h5 class="mt-0">Media Title</h5>\r\n    <p>\r\n      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.\r\n      Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc\r\n      ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\r\n    </p>\r\n  </CMedia>\r\n</template>\r\n'},525:function(r,n,e){"use strict";e.r(n),n.default='<template>\r\n  <div>\r\n    <CButton\r\n      @click="warningModal = true"\r\n      color="primary"\r\n    >\r\n      Open modal\r\n    </CButton>\r\n    <CModal\r\n      title="Modal title"\r\n      color="warning"\r\n      :show.sync="warningModal"\r\n    >\r\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\r\n      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\r\n      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\r\n      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\r\n      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\r\n      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n    </CModal>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  data () {\r\n    return {\r\n      warningModal: false\r\n    }\r\n  }\r\n}\r\n<\/script>\r\n'},526:function(r,n,e){"use strict";e.r(n),n.default='<template>\r\n  <CNav variant="pills">\r\n    <CNavItem active>Active</CNavItem>\r\n    <CNavItem>Link</CNavItem>\r\n    <CNavItem>Another Link</CNavItem>\r\n    <CNavItem disabled>Disabled</CNavItem>\r\n  </CNav>\r\n</template>\r\n'},527:function(r,n,e){"use strict";e.r(n),n.default='<template>\r\n  <CNavbar expandable="md" type="dark" color="info">\r\n    <CToggler in-navbar @click="collapsed = !collapsed"/>\r\n    <CNavbarBrand href="#">NavBar</CNavbarBrand>\r\n    <CCollapse :show="collapsed" navbar>\r\n      <CNavbarNav>\r\n        <CNavItem href="#">Link</CNavItem>\r\n        <CNavItem href="#" disabled>Disabled</CNavItem>\r\n      </CNavbarNav>\r\n\r\n      \x3c!-- Right aligned nav items --\x3e\r\n      <CNavbarNav class="ml-auto">\r\n        <CForm inline>\r\n          <CInput\r\n            class="mr-sm-2"\r\n            placeholder="Search"\r\n            size="sm"\r\n          />\r\n          <CButton\r\n            color="secondary"\r\n            size="sm" \r\n            class="my-2 my-sm-0" \r\n            type="submit"\r\n          >\r\n            Search\r\n          </CButton>\r\n        </CForm>\r\n\r\n        <CDropdown\r\n          togglerText="Lang"\r\n          nav\r\n          placement="bottom-end"\r\n        >\r\n            <CDropdownItem>EN</CDropdownItem>\r\n            <CDropdownItem>ES</CDropdownItem>\r\n            <CDropdownItem>RU</CDropdownItem>\r\n            <CDropdownItem>FA</CDropdownItem>\r\n        </CDropdown>\r\n\r\n        <CDropdown\r\n          nav\r\n          togglerText="User"\r\n          placement="bottom-end"\r\n        >\r\n          <CDropdownItem>Profile</CDropdownItem>\r\n          <CDropdownItem>Signout</CDropdownItem>\r\n        </CDropdown>\r\n      </CNavbarNav>\r\n    </CCollapse>\r\n  </CNavbar>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  data () {\r\n    return {\r\n      collapsed: false\r\n    }\r\n  }\r\n}\r\n<\/script>\r\n'},528:function(r,n,e){"use strict";e.r(n),n.default='<template>\r\n  <div>\r\n    Active page: {{page}}\r\n    <CPagination\r\n      :activePage.sync="page"\r\n      :pages="10"\r\n      size="lg"\r\n      align="center"\r\n    />\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  data () {\r\n    return {\r\n      page: 2\r\n    }\r\n  }\r\n}\r\n<\/script>\r\n'},529:function(r,n,e){"use strict";e.r(n),n.default='<template>\r\n  <div>\r\n    <CProgress\r\n      :value="counter"\r\n      animated\r\n      show-value\r\n      height="30px"\r\n    />\r\n    <CProgress class="mt-1" show-value>\r\n      <CProgressBar\r\n        :value="counter*(6/10)"\r\n        color="success"\r\n      />\r\n      <CProgressBar\r\n        :value="counter*(2.5/10)"\r\n        color="warning"\r\n      />\r\n      <CProgressBar\r\n        :value="counter*(1.5/10)"\r\n        color="danger"\r\n      />\r\n    </CProgress>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  data () {\r\n    return {\r\n      counter: 86\r\n    }\r\n  }\r\n}\r\n<\/script>\r\n'},530:function(r,n,e){"use strict";e.r(n),n.default="<template>\r\n  <CRenderFunction :contentToRender=\"renderFunction\" class=\"d-flex justify-content-between\">\r\n    <template #named-slot>\r\n      Element rendered by<CBadge class=\"ml-2\" color=\"success\">NAMED SLOT</CBadge>\r\n    </template>\r\n  </CRenderFunction>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  data () {\r\n    return {\r\n      counter: 0\r\n    }\r\n  },\r\n  computed: {\r\n    renderFunction () {\r\n      return [\r\n        'CAlert', \r\n        { props: { color: 'success' } }, \r\n        [\r\n          [\r\n            'CButton', \r\n            {\r\n              props: { color: this.counter > 0 ? 'success' : 'warning' }, \r\n              on: { click: (e) => this.counter++ }\r\n            }, \r\n            [`Button was clicked ${this.counter} times`] \r\n          ], \r\n          [\r\n            'CButton', \r\n            { props: { color: 'warning' }}, \r\n            [{ slot: 'named-slot' }] \r\n          ],\r\n        ]\r\n      ]\r\n    }\r\n  }\r\n}\r\n<\/script>"},531:function(r,n,e){"use strict";e.r(n),n.default='<template>\r\n  <div class="d-flex justify-content-between align-items-center">\r\n    <CSpinner color="success" size="sm"/>\r\n    <CSpinner color="info"/>\r\n    <CSpinner\r\n      color="primary"\r\n      style="width:4rem;height:4rem;"\r\n    />\r\n\r\n    <CSpinner grow size="sm"/>\r\n    <CSpinner color="warning" grow/>\r\n    <CSpinner\r\n      style="width:4rem;height:4rem;"\r\n      color="danger"\r\n      grow\r\n    />\r\n  </div>\r\n</template>\r\n'},532:function(r,n,e){"use strict";e.r(n),n.default="<template>\r\n  <div>\r\n    <CLink\r\n      href=\"https://coreui.io/vue/demo/#/base/switches\"\r\n      target=\"_blank\"\r\n    >Check out more examples here!</CLink><br>\r\n    <template v-for=\"(mode, index) in modes\">\r\n      Passed props: {{mode}}\r\n      <div class=\"d-flex justify-content-between my-4\" :key=\"index\">\r\n        <CSwitch\r\n          :key=\"key\"\r\n          :color=\"color\"\r\n          v-bind=\"mode\"\r\n          checked\r\n          :value=\"color\"\r\n          v-for=\"(color, key) in colors\"\r\n        />\r\n      </div>\r\n    </template>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  data () {\r\n    return {\r\n      modes: [\r\n        {},\r\n        { size: 'sm'},\r\n        { size: 'lg'},\r\n        { variant: '3d' },\r\n        { shape: 'pill' },\r\n        { variant: 'opposite' },\r\n        { variant: 'outline', shape:'pill' },\r\n\r\n      ],\r\n      colors: ['primary', 'success', 'warning', 'danger', 'info', 'dark', 'light', 'secondary']\r\n    }\r\n  }\r\n}\r\n<\/script>\r\n"},533:function(r,n,e){"use strict";e.r(n),n.default="<template>\r\n  <CDataTable\r\n    :items=\"items\"\r\n    :fields=\"fields\"\r\n    column-filter\r\n    table-filter\r\n    items-per-page-select\r\n    hover\r\n    sorter\r\n    pagination\r\n  >\r\n    <template #status=\"{item}\">\r\n      <td>\r\n        <CBadge :color=\"getBadge(item.status)\">\r\n          {{item.status}}\r\n        </CBadge>\r\n      </td>\r\n    </template>\r\n    <template #show_details=\"{item, index}\">\r\n      <td class=\"py-2\">\r\n        <CButton\r\n          color=\"primary\"\r\n          variant=\"outline\"\r\n          square\r\n          size=\"sm\"\r\n          @click=\"toggleDetails(index)\"\r\n        >\r\n          {{details.includes(index) ? 'Hide' : 'Show'}}\r\n        </CButton>\r\n      </td>\r\n    </template>\r\n    <template #details=\"{item, index}\">\r\n      <CCollapse :show=\"details.includes(index)\">\r\n        <CCardBody>\r\n          {{index + 1}} - {{item}}\r\n        </CCardBody>\r\n      </CCollapse>\r\n    </template>\r\n  </CDataTable>\r\n</template>\r\n\r\n<script>\r\nconst fields = [\r\n  { key: 'username', _style:'width:40%' },\r\n  'registered',\r\n  { key: 'role', _style:'width:20%;' },\r\n  { key: 'status', _style:'width:20%;' },\r\n  { \r\n    key: 'show_details', \r\n    label: '', \r\n    _style: 'width:1%', \r\n    sorter: false, \r\n    filter: false\r\n  }\r\n]\r\n\r\nconst items = [\r\n  { username: 'Samppa Nori', registered: '2012/01/01', role: 'Member', status: 'Active'},\r\n  { username: 'Estavan Lykos', registered: '2012/02/01', role: 'Staff', status: 'Banned'},\r\n  { username: 'Chetan Mohamed', registered: '2012/02/01', role: 'Admin', status: 'Inactive'},\r\n  { username: 'Derick Maximinus', registered: '2012/03/01', role: 'Member', status: 'Pending'},\r\n  { username: 'Friderik Dávid', registered: '2012/01/21', role: 'Staff', status: 'Active'},\r\n  { username: 'Yiorgos Avraamu', registered: '2012/01/01', role: 'Member', status: 'Active'},\r\n  { username: 'Avram Tarasios', registered: '2012/02/01', role: 'Staff', status: 'Banned', _classes: 'table-success'},\r\n  { username: 'Quintin Ed', registered: '2012/02/01', role: 'Admin', status: 'Inactive'},\r\n  { username: 'Enéas Kwadwo', registered: '2012/03/01', role: 'Member', status: 'Pending'},\r\n  { username: 'Agapetus Tadeáš', registered: '2012/01/21', role: 'Staff', status: 'Active'},\r\n  { username: 'Carwyn Fachtna', registered: '2012/01/01', role: 'Member', status: 'Active', _classes: 'table-info'},\r\n  { username: 'Nehemiah Tatius', registered: '2012/02/01', role: 'Staff', status: 'Banned'},\r\n  { username: 'Ebbe Gemariah', registered: '2012/02/01', role: 'Admin', status: 'Inactive'},\r\n  { username: 'Eustorgios Amulius', registered: '2012/03/01', role: 'Member', status: 'Pending'},\r\n  { username: 'Leopold Gáspár', registered: '2012/01/21', role: 'Staff', status: 'Active'},\r\n  { username: 'Pompeius René', registered: '2012/01/01', role: 'Member', status: 'Active'},\r\n  { username: 'Paĉjo Jadon', registered: '2012/02/01', role: 'Staff', status: 'Banned'},\r\n  { username: 'Micheal Mercurius', registered: '2012/02/01', role: 'Admin', status: 'Inactive'},\r\n  { username: 'Ganesha Dubhghall', registered: '2012/03/01', role: 'Member', status: 'Pending'},\r\n  { username: 'Hiroto Šimun', registered: '2012/01/21', role: 'Staff', status: 'Active'},\r\n  { username: 'Vishnu Serghei', registered: '2012/01/01', role: 'Member', status: 'Active'},\r\n  { username: 'Zbyněk Phoibos', registered: '2012/02/01', role: 'Staff', status: 'Banned'},\r\n  { username: 'Einar Randall', registered: '2012/02/01', role: 'Admin', status: 'Inactive', _classes: 'table-danger'},\r\n  { username: 'Félix Troels', registered: '2012/03/21', role: 'Staff', status: 'Active'},\r\n  { username: 'Aulus Agmundr', registered: '2012/01/01', role: 'Member', status: 'Pending'}\r\n]\r\n\r\nexport default {\r\n  name: 'tables',\r\n  data () {\r\n    return {\r\n      items,\r\n      fields,\r\n      details: []\r\n    }\r\n  },\r\n  methods: {\r\n    getBadge (status) {\r\n      return status === 'Active' ? 'success'\r\n             : status === 'Inactive' ? 'secondary'\r\n             : status === 'Pending' ? 'warning'\r\n             : status === 'Banned' ? 'danger' : 'primary'\r\n    },\r\n    toggleDetails (index) {\r\n      const position = this.details.indexOf(index)\r\n      position !== -1 ? this.details.splice(position, 1) : this.details.push(index)\r\n    }\r\n  }\r\n}\r\n<\/script>\r\n"},534:function(r,n,e){"use strict";e.r(n),n.default='<template>\r\n  <CTabs variant="pills">\r\n    <CTab title="Home" active>\r\n      1. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore\r\n      et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\r\n      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\r\n      dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\r\n      officia deserunt mollit anim id est laborum.\r\n    </CTab>\r\n    <CTab title="Profile" >\r\n      2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore\r\n      et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\r\n      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\r\n      dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\r\n      officia deserunt mollit anim id est laborum.\r\n    </CTab>\r\n    <CTab title="Disabled" disabled>\r\n      Text will not be shown.\r\n    </CTab>\r\n  </CTabs>\r\n</template>\r\n'},535:function(r,n,e){"use strict";e.r(n),n.default='<template>\r\n  <div>\r\n    <CToast\r\n      :show="true"\r\n      position="static"\r\n      title="CToast static component"\r\n    >\r\n      Hello, world! This is a <b>toast</b> message.\r\n    </CToast>\r\n    <CButton \r\n      color="primary" \r\n      @click="addFixedToast"\r\n    >\r\n      click to add fixed toast!\r\n    </CButton>\r\n    <CToaster :autohide="3000">\r\n      <template v-for="toast in fixedToasts">\r\n        <CToast\r\n          :key="\'toast\' + toast"\r\n          :show="true"\r\n          header="CToast fixed component"\r\n        >\r\n          Hello, world! This is a <b>toast</b> number {{toast}}.\r\n        </CToast>\r\n      </template>\r\n    </CToaster>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  data () {\r\n    return {\r\n      fixedToasts: 0\r\n    }\r\n  },\r\n  methods: {\r\n    addFixedToast () {\r\n      this.fixedToasts++\r\n    }\r\n  }\r\n}\r\n<\/script>'},536:function(r,n,e){"use strict";e.r(n),n.default='<template>\r\n  <CRow>\r\n    <CCol col="12" sm="6">\r\n      <CWidgetBrand\r\n        color="facebook"\r\n        rightHeader="89k"\r\n        rightFooter="friends"\r\n        leftHeader="459"\r\n        leftFooter="feeds"\r\n        class="w-100"\r\n      >\r\n        <CIcon\r\n          name="cib-facebook"\r\n          height="56"\r\n          class="my-4"\r\n        />\r\n      </CWidgetBrand>\r\n    </CCol>\r\n    <CCol>\r\n      <CWidgetBrand\r\n        color="linkedin"\r\n        right-header="500+"\r\n        right-footer="contracts"\r\n        left-header="292"\r\n        left-footer="feeds"\r\n        class="w-100"\r\n      >\r\n        <CIcon\r\n          name="cib-linkedin"\r\n          height="56"\r\n          class="my-4"\r\n        />\r\n      </CWidgetBrand>\r\n    </CCol>\r\n  </CRow>\r\n</template>\r\n'},537:function(r,n,e){"use strict";e.r(n),n.default='<template>\r\n  <CRow>\r\n    <CCol col="12" sm="6">\r\n      <CWidgetDropdown \r\n        header="9.823" \r\n        text="Members online"\r\n        color="primary"\r\n      >\r\n        <CDropdown\r\n          class="float-right"\r\n          color="transparent p-0"\r\n          placement="bottom-end"\r\n        >\r\n          <template #toggler-content>\r\n            <CIcon name="cil-settings"/>\r\n          </template>\r\n          <CDropdownItem>Action</CDropdownItem>\r\n          <CDropdownItem>Another action</CDropdownItem>\r\n          <CDropdownItem>Something else here...</CDropdownItem>\r\n          <CDropdownItem disabled>Disabled action</CDropdownItem>\r\n        </CDropdown>\r\n      </CWidgetDropdown>\r\n    </CCol>\r\n    <CCol col="12" sm="6">\r\n      \x3c!-- Raw widget --\x3e\r\n      <CWidgetDropdown \r\n        header="9.823" \r\n        text="Members online" \r\n        color="warning"\r\n      />\r\n    </CCol>\r\n  </CRow>\r\n</template>\r\n'},538:function(r,n,e){"use strict";e.r(n),n.default='<template>\r\n  <CRow>\r\n    <CCol sm="12" lg="6">\r\n      <CWidgetHeaderDetails\r\n        color="primary"\r\n        right-header="SALE"\r\n        right-footer="Today 6:43 AM"\r\n        left-header="$1.890,65"\r\n        left-footer="+432,50 (15,78%)"\r\n      />\r\n    </CCol>\r\n    <CCol sm="12" lg="6">\r\n      <CWidgetHeaderDetails\r\n        color="success"\r\n        right-header="SALE"\r\n        right-footer="Today 6:43 AM"\r\n        left-header="$1.890,65"\r\n        left-footer="+432,50 (15,78%)"\r\n      />\r\n    </CCol>\r\n  </CRow>\r\n</template>\r\n'},539:function(r,n,e){"use strict";e.r(n),n.default='<template>\r\n  <CRow>\r\n    <CCol col="12" sm="6">\r\n      <CWidgetIcon\r\n        header="$1.999,50"\r\n        text="Income"\r\n        color="primary"\r\n      >\r\n        <CIcon name="cil-settings"/>\r\n      </CWidgetIcon>\r\n    </CCol>\r\n    <CCol col="12" sm="6">\r\n      <CWidgetIcon\r\n        header="$1.999,50"\r\n        text="Income"\r\n        color="info"\r\n      >\r\n        <CIcon name="cil-laptop"/>\r\n      </CWidgetIcon>\r\n    </CCol>\r\n  </CRow>\r\n</template>\r\n'},540:function(r,n,e){"use strict";e.r(n),n.default='<template>\r\n  <CRow>\r\n    <CCol lg="6">\r\n      <CWidgetProgress\r\n        header="12.124"\r\n        text="Lorem ipsum..."\r\n        footer="Lorem ipsum dolor sit amet enim."\r\n        color="success"\r\n        :value="25"\r\n      />\r\n    </CCol>\r\n    <CCol lg="6">\r\n      <CWidgetProgress\r\n        header="12.124"\r\n        text="Lorem ipsum..."\r\n        footer="Lorem ipsum dolor sit amet enim."\r\n        color="varning"\r\n        :value="25"\r\n      />\r\n    </CCol>\r\n  </CRow>\r\n</template>\r\n'},541:function(r,n,e){"use strict";e.r(n),n.default='<template>\r\n  <CRow>\r\n    <CCol>\r\n      <CWidgetProgressIcon\r\n        header="87.500"\r\n        text="Visitors"\r\n        color="info"\r\n      >\r\n        <CIcon name="cil-people" height="36"/>\r\n      </CWidgetProgressIcon>\r\n    </CCol>\r\n    <CCol>\r\n      <CWidgetProgressIcon\r\n        header="385"\r\n        text="New Clients"\r\n        color="success"\r\n      >\r\n        <CIcon name="cil-user-follow" height="36"/>\r\n      </CWidgetProgressIcon>\r\n    </CCol>\r\n  </CRow>\r\n</template>\r\n'},542:function(r,n,e){"use strict";e.r(n),n.default='<template>\r\n  <CWidgetProgressIcon\r\n    header="385"\r\n    text="New Clients"\r\n    color="success"\r\n  >\r\n    <CIcon name="cil-basket-loaded" height="36"/>\r\n    <template #progress>\r\n      <CProgress\r\n        animated\r\n        color="warning"\r\n        height="1rem"\r\n        :value="31"\r\n      />\r\n    </template>\r\n  </CWidgetProgressIcon>\r\n</template>\r\n'},543:function(r,n,e){"use strict";e.r(n),n.default='<template>\r\n  <CWidgetProgress\r\n    header="12.124"\r\n    text="Lorem ipsum..."\r\n    footer="Lorem ipsum dolor sit amet enim."\r\n  >\r\n    <CProgress\r\n      animated\r\n      color="success"\r\n      height="1rem"\r\n      :value="46"\r\n    />\r\n  </CWidgetProgress>\r\n</template>\r\n'},544:function(r,n,e){"use strict";e.r(n),n.default='<template>\r\n  <CRow>\r\n    <CCol sm="12" lg="4">\r\n      <CWidgetSimple header="title" text="1,123">\r\n        <CProgress\r\n          animated\r\n          color="danger"\r\n          height="0.8rem"\r\n          :value="34"\r\n        />\r\n      </CWidgetSimple>\r\n    </CCol>\r\n    <CCol sm="12" lg="4">\r\n      <CWidgetSimple header="title" text="1,123">\r\n        <CProgress\r\n          animated\r\n          color="primary"\r\n          height="0.8rem"\r\n          :value="48"\r\n        />\r\n      </CWidgetSimple>\r\n    </CCol>\r\n    <CCol sm="12" lg="4">\r\n      <CWidgetSimple header="title" text="1,123">\r\n        <CProgress\r\n          animated\r\n          color="success"\r\n          height="0.8rem"\r\n          :value="76"\r\n        />\r\n      </CWidgetSimple>\r\n    </CCol>\r\n  </CRow>\r\n</template>\r\n'},545:function(r,n,e){"use strict";e.r(n),n.default='<template>\r\n  <CLink\r\n    href="https://coreui.io/vue/demo/#/base/switches"\r\n    target="_blank"\r\n  >\r\n    Check out examples here!\r\n  </CLink>\r\n</template>\r\n'}}]);