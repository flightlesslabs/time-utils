// ex. scripts/build_npm.ts
import { build, emptyDir } from '@deno/dnt';
const pkg = JSON.parse(await Deno.readTextFile('./deno.json'));

const npmFolder = 'dist';

await emptyDir(`./${npmFolder}`);

await build({
  entryPoints: ['./src/mod.ts'],
  outDir: `./${npmFolder}`,
  test: false,
  shims: {
    // see JS docs for overview and more options
    deno: true,
  },
  package: {
    // package.json properties
    name: pkg.name,
    version: pkg.version,
    publishConfig: {
      'access': 'public',
    },
    description: pkg.description,
    license: pkg.license,
    repository: pkg.repository,
  },
  postBuild() {
    Deno.copyFileSync('README.md', `${npmFolder}/README.md`);
    Deno.copyFileSync('CHANGELOG.md', `${npmFolder}/CHANGELOG.md`);
    Deno.copyFileSync('LICENSE', `${npmFolder}/LICENSE`);
  },
});
