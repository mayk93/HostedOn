/**
 * Created by michael on 07/02/2018.
 */

let hosting_providers = [
    "github",
    "bitbucket",
    "gitlab",
    "phabricator",
    "dropbox"
];

export let icon_heuristic = (link) => {
    let icon = "cloud";

    hosting_providers.map((provider) => {
        if (link.indexOf(provider) !== -1) {
            icon = provider;
        }
    });

    return icon;
};

export let go_to = (url, new_tab) => {
    if (new_tab) {
        window.open(url, '_blank').focus();
    } else {
        window.open(url, '_self');
    }
};