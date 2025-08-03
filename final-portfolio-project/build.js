import { execSync } from 'child_process';

console.log('Starting build process...');

try {
  // Clean previous build
  console.log('Cleaning previous build...');
  execSync('rmdir /s /q dist || true', { stdio: 'inherit', shell: true });
  execSync('mkdir dist', { stdio: 'inherit', shell: true });

  // Install dependencies
  console.log('Installing dependencies...');
  execSync('npm ci', { stdio: 'inherit' });

  // Build the project
  console.log('Building project...');
  execSync('npm run build', { stdio: 'inherit' });

  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}
