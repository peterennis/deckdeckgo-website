import '@ionic/core/css/ionic.bundle.css';

import './css/variables.css';
import './css/theme.css';
import './css/pager.css';
import './css/modal.css';
import './css/popover.css';
import './css/print.css';
import './css/alert.css';
import './css/signup.css';
import './css/img.css';
import './css/button.css';

import '../node_modules/@deckdeckgo/deck-utils/styles/deckdeckgo-deck.css';
import '../node_modules/@deckdeckgo/deck-utils/styles/deckdeckgo-deck-fonts.css';
import '../node_modules/@deckdeckgo/deck-utils/styles/deckdeckgo-deck-rtl.css';

import '@webcomponents/custom-elements';

import * as manifestData from './manifest.json';
window.ROOM_NAME = manifestData.name;

import './scripts/loading.js';
import './scripts/slider.js';
import './scripts/sliderJumpTo.js';
import './scripts/modalNotes.js';
import './scripts/modalRemoteControl.js';
import './scripts/remoteControl.js';
import './scripts/actions.js';
import './scripts/menu.js';
import './scripts/history.js';
import './scripts/fullscreen.js';
import './scripts/resize.js';
import './scripts/actionPlayPause.js';

import { defineCustomElements as ionicElements } from '@ionic/core/loader';
ionicElements(window);

import { defineCustomElements as ioniconsElements } from 'ionicons/dist/loader';
ioniconsElements(window);

// Init DeckDeckGo elements
import { defineCustomElements as deckDeckGoElements } from '@deckdeckgo/core/dist/loader';

import {defineCustomElements as deckDeckGoSlideTitleElements } from '@deckdeckgo/slide-title/dist/loader';
import {defineCustomElements as deckDeckGoSlideContentElements } from '@deckdeckgo/slide-content/dist/loader';
import {defineCustomElements as deckDeckGoSlideAuthorElements } from '@deckdeckgo/slide-author/dist/loader';
import {defineCustomElements as deckDeckGoSlideChartElements } from '@deckdeckgo/slide-chart/dist/loader';
import {defineCustomElements as deckDeckGoSlideYoutubeElements } from '@deckdeckgo/slide-youtube/dist/loader';
import {defineCustomElements as deckDeckGoSlideSplitElements } from '@deckdeckgo/slide-split/dist/loader';
import {defineCustomElements as deckDeckGoSlideCodeElements } from '@deckdeckgo/slide-code/dist/loader';
import {defineCustomElements as deckDeckGoSlideGifElements } from '@deckdeckgo/slide-gif/dist/loader';
import {defineCustomElements as deckDeckGoSlideQRCodeElements } from '@deckdeckgo/slide-qrcode/dist/loader';
import {defineCustomElements as deckDeckGoSlidePollElements } from '@deckdeckgo/slide-poll/dist/loader';

import { defineCustomElements as deckDeckGoRemoteElements } from '@deckdeckgo/remote/dist/loader';

import { defineCustomElements as deckDeckGoChartsElements } from '@deckdeckgo/charts/dist/loader';
import { defineCustomElements as deckDeckGoQRCodeElements } from '@deckdeckgo/qrcode/dist/loader';
import { defineCustomElements as deckDeckGoHighlightCodeElements } from '@deckdeckgo/highlight-code/dist/loader';
import { defineCustomElements as deckDeckGoSocialElements } from '@deckdeckgo/social/dist/loader';
import { defineCustomElements as deckDeckGoYoutubeElements } from '@deckdeckgo/youtube/dist/loader';

// Init web-social-share
import { defineCustomElements as webSocialShareElements } from 'web-social-share/dist/loader';

deckDeckGoElements(window).then(async () => {
    await deckDeckGoChartsElements(window);
    await deckDeckGoQRCodeElements(window);
    await deckDeckGoHighlightCodeElements(window);
    await deckDeckGoSocialElements(window);
    await deckDeckGoYoutubeElements(window);

    const promises = [];

    promises.push(deckDeckGoSlideTitleElements(window));
    promises.push(deckDeckGoSlideContentElements(window));
    promises.push(deckDeckGoSlideAuthorElements(window));
    promises.push(deckDeckGoSlideChartElements(window));
    promises.push(deckDeckGoSlideYoutubeElements(window));
    promises.push(deckDeckGoSlideSplitElements(window));
    promises.push(deckDeckGoSlideCodeElements(window));
    promises.push(deckDeckGoSlideGifElements(window));
    promises.push(deckDeckGoSlideQRCodeElements(window));
    promises.push(deckDeckGoSlidePollElements(window));

    await Promise.all(promises);

    await postLoading();
    await initActions();
    await initFullscreen();

    await postLoadingJumpTo();
    await initDeckHistoryWatch();

    await webSocialShareElements(window);

    deckDeckGoRemoteElements(window).then(async () => {
        await initRemote();
    });
});
