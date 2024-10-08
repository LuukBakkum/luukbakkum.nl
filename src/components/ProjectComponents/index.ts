//NOTE: unfortunately I cannot dynamically import and collect all projectConfig's from each projectConfig.ts file because of the way vite works.
// See: https://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility
import { ProjectConfig } from '../../types/project';

// Import project configs here
import luukbakkumNlProjectConfig from './LuukbakkumNlPortfolio/projectConfig';
import whoHasBeenCallingProjectConfig from './WhoHasBeenCalling/projectConfig';

// Add project configs to the array here
const projectConfigs: ProjectConfig[] = [
  luukbakkumNlProjectConfig,
  whoHasBeenCallingProjectConfig,
];

export default projectConfigs;
