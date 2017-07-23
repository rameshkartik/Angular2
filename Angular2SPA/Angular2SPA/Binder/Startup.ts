import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ModuleLibrary } from '../Binder/ModuleLibrary'
const platform = platformBrowserDynamic();
platform.bootstrapModule(ModuleLibrary);