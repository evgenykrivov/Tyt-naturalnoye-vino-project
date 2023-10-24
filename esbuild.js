import esbuild from "esbuild"

let result = await esbuild.build({
  entryPoints: ["app.ts"],
  bundle: true,
  outdir: "dist"
})
console.log(result)
