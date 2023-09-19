import { authPage } from "./pages/auth";

const routes = {
  auth: {
    path: "/auth",
    page: authPage,
  },
};

const app = {
  mainEl: document.querySelector("#page"),
  pageName: null,

  getPageName() {
    return app.mainEl.getAttribute("data-page");
  },

  init() {

    app.pageName = app.getPageName();
    routes[app.pageName].page.init();

    console.log("app initialized", `${app.pageName} page`);
  },
};

export default app;