import {ActivatedRouteSnapshot, DetachedRouteHandle, Route, RouteReuseStrategy, UrlSegment} from "@angular/router";

export class CustomRouteReuseStrategy implements RouteReuseStrategy {
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    console.log("shouldDetach");
    return null;
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    console.log("shouldAttach");
    return false;
  }

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    console.log("shouldDetach");
    return false;
  }

  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    console.log("shouldReuseRoute");
    return false;
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null): void {
    console.log("store");
  }
}
