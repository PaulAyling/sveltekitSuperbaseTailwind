# How I installed superbase

I wanted to install superbase on a sveltekit installation - not the svelte template that was provided in the instructions. from here
* https://supabase.com/docs/guides/with-svelte


I replace the part
```npx degit sveltejs/template supabase-svelte
cd supabase-svelte```
with those from sveltkit website
```
npm init svelte@next my-app
cd my-app
npm install
npm run dev -- --open
```
I then updated node.js to latest version (as this did not work on node v 14.01)

I then I replaced the step in the tutorial to install superbase 
```
npm install @supabase/supabase-js
```
with this code to apply superbase to an existing sveltkit project
```
npx apply supabase-community/svelte-supabase
```
and then followed the instructions starting at setting up the .env file