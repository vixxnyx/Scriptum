
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const LESS_TERMCAP_se: string;
	export const TAURI_ENV_PLATFORM: string;
	export const LESS_TERMCAP_ue: string;
	export const USER: string;
	export const npm_config_user_agent: string;
	export const TAURI_CLI_VERBOSITY: string;
	export const npm_node_execpath: string;
	export const LD_LIBRARY_PATH: string;
	export const SHLVL: string;
	export const liboqs_DIR: string;
	export const npm_config_noproxy: string;
	export const HOME: string;
	export const OLDPWD: string;
	export const npm_package_json: string;
	export const LESS_TERMCAP_so: string;
	export const npm_config_local_prefix: string;
	export const npm_config_userconfig: string;
	export const TAURI_ENV_TARGET_TRIPLE: string;
	export const COLOR: string;
	export const WSL_DISTRO_NAME: string;
	export const npm_config_metrics_registry: string;
	export const QT_QPA_PLATFORMTHEME: string;
	export const WAYLAND_DISPLAY: string;
	export const LOGNAME: string;
	export const LESS_TERMCAP_us: string;
	export const NAME: string;
	export const PULSE_SERVER: string;
	export const QT_AUTO_SCREEN_SCALE_FACTOR: string;
	export const WSL_INTEROP: string;
	export const _: string;
	export const npm_config_prefix: string;
	export const TERM: string;
	export const npm_config_cache: string;
	export const TAURI_ENV_DEBUG: string;
	export const npm_config_node_gyp: string;
	export const PATH: string;
	export const NODE: string;
	export const TAURI_ENV_PLATFORM_VERSION: string;
	export const npm_package_name: string;
	export const XDG_RUNTIME_DIR: string;
	export const DISPLAY: string;
	export const LANG: string;
	export const MACOSX_DEPLOYMENT_TARGET: string;
	export const TAURI_ENV_ARCH: string;
	export const LS_COLORS: string;
	export const XAUTHORITY: string;
	export const npm_lifecycle_script: string;
	export const SHELL: string;
	export const npm_lifecycle_event: string;
	export const npm_package_version: string;
	export const LESS_TERMCAP_mb: string;
	export const LESS_TERMCAP_md: string;
	export const TAURI_ENV_FAMILY: string;
	export const npm_config_globalconfig: string;
	export const npm_config_init_module: string;
	export const LESS_TERMCAP_me: string;
	export const PWD: string;
	export const npm_config_globalignorefile: string;
	export const npm_execpath: string;
	export const npm_config_global_prefix: string;
	export const npm_command: string;
	export const HOSTTYPE: string;
	export const WSL2_GUI_APPS_ENABLED: string;
	export const EDITOR: string;
	export const INIT_CWD: string;
	export const WSLENV: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		LESS_TERMCAP_se: string;
		TAURI_ENV_PLATFORM: string;
		LESS_TERMCAP_ue: string;
		USER: string;
		npm_config_user_agent: string;
		TAURI_CLI_VERBOSITY: string;
		npm_node_execpath: string;
		LD_LIBRARY_PATH: string;
		SHLVL: string;
		liboqs_DIR: string;
		npm_config_noproxy: string;
		HOME: string;
		OLDPWD: string;
		npm_package_json: string;
		LESS_TERMCAP_so: string;
		npm_config_local_prefix: string;
		npm_config_userconfig: string;
		TAURI_ENV_TARGET_TRIPLE: string;
		COLOR: string;
		WSL_DISTRO_NAME: string;
		npm_config_metrics_registry: string;
		QT_QPA_PLATFORMTHEME: string;
		WAYLAND_DISPLAY: string;
		LOGNAME: string;
		LESS_TERMCAP_us: string;
		NAME: string;
		PULSE_SERVER: string;
		QT_AUTO_SCREEN_SCALE_FACTOR: string;
		WSL_INTEROP: string;
		_: string;
		npm_config_prefix: string;
		TERM: string;
		npm_config_cache: string;
		TAURI_ENV_DEBUG: string;
		npm_config_node_gyp: string;
		PATH: string;
		NODE: string;
		TAURI_ENV_PLATFORM_VERSION: string;
		npm_package_name: string;
		XDG_RUNTIME_DIR: string;
		DISPLAY: string;
		LANG: string;
		MACOSX_DEPLOYMENT_TARGET: string;
		TAURI_ENV_ARCH: string;
		LS_COLORS: string;
		XAUTHORITY: string;
		npm_lifecycle_script: string;
		SHELL: string;
		npm_lifecycle_event: string;
		npm_package_version: string;
		LESS_TERMCAP_mb: string;
		LESS_TERMCAP_md: string;
		TAURI_ENV_FAMILY: string;
		npm_config_globalconfig: string;
		npm_config_init_module: string;
		LESS_TERMCAP_me: string;
		PWD: string;
		npm_config_globalignorefile: string;
		npm_execpath: string;
		npm_config_global_prefix: string;
		npm_command: string;
		HOSTTYPE: string;
		WSL2_GUI_APPS_ENABLED: string;
		EDITOR: string;
		INIT_CWD: string;
		WSLENV: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
