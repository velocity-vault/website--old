const BASE_URL = process.env.VV_API_BASE_URL;

export const STEAM_LOG_IN_URL = new URL("steam_auth_redirect", BASE_URL);
export const LOG_OUT_URL = new URL("log_out", BASE_URL);

export async function ping() {
    const url = new URL("ping", BASE_URL);
    await fetch(url, {
        method: 'GET',
        credentials: 'include', // To refresh the session
    });
}

export async function getSteamProfile(steamid) {
    let url = new URL("get_steam_profile", BASE_URL);
    url.searchParams.set("steamid", steamid);

    const response = await fetch(url);
    return await response.json();
}

export async function getSessionSteamProfile() {
    console.log("getsessionsteamprofile");
    const url = new URL("get_session_steam_profile", BASE_URL);
    const response = await fetch(url, {
        method: 'GET',
        credentials: 'include'
    });
    return await response.json();
}
