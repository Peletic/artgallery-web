import {RouterConstructor} from "@/index";

export function route() {
    return function(target: Function) {
        decoratedRoutes.push(<RouterConstructor>target);
    }
}

export const decoratedRoutes: RouterConstructor[] = []