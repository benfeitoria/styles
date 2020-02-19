/**
 * Icons placement
 */

    let icons = [
        'arrow-down',
        'arrow-left-gray',
        'arrow-left',
        'caret',
        'caret-gray',
        'check-gray',
        'check',
        'download',
        'exclamation-mark-circle',
        'eye',
        'lamp-blue-bg',
        'lamp',
        'lupe',
        'menu',
        'plus-transparent',
        'plus',
        'times',
        'user'
    ];

    let iconsPlacement = document.getElementById('icons-list');

    for(let icon of icons){
        let iconLi = document.createElement('li');
        
        let iconLiIcon = document.createElement('i');
        iconLiIcon.setAttribute('class','bfi bfi--'+icon);

        let iconLiCode = document.createElement('code'),
            iconLiCodeId = 'icon-html-code-'+icon,
            iconLiIconOuterHTML = iconLiIcon.outerHTML;

        iconLiCode.setAttribute('id',iconLiCodeId);

        iconLiCode.innerHTML = iconLiIconOuterHTML
            .toString()
            .replace(/\</g,'&lt;')
            .replace(/\>/g,'&gt;');

        iconLi.append(iconLiIcon);
        iconLi.append(iconLiCode);

        iconsPlacement.append(iconLi);
        
        new ClipboardJS(`#${iconLiCodeId}`, {
            text: function() {
                return iconLiIconOuterHTML;
            }
        });
    }

/**
 * End of Icons placement
 */