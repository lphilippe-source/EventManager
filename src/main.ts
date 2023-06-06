import 'module-alias/register'
import { MainModule } from '@infrastructure/main/main.module'

async function bootstrap (): Promise<void> {
  const boot = new MainModule()
  void boot.bootstrap()
}
void bootstrap()
