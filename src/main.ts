import {createApplication} from "@angular/platform-browser";
import {createCustomElement} from "@angular/elements";
import {AppComponent} from "./app/app.component";

(async () => {
  const app = await createApplication();

  const customElement = createCustomElement(AppComponent, {
    injector: app.injector,
  });
  customElements.define('custom-element', customElement);
})();
