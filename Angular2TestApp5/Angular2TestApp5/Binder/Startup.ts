import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { EmployeeModuleLibrary } from './EmployeeModuleLibrary'
const platform = platformBrowserDynamic();
platform.bootstrapModule(EmployeeModuleLibrary);