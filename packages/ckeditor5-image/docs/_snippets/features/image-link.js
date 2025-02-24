/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* globals ClassicEditor, console, window, document */

import { CS_CONFIG } from '@ckeditor/ckeditor5-cloud-services/tests/_utils/cloud-services-config.js';

ClassicEditor
	.create( document.querySelector( '#snippet-image-link' ), {
		removePlugins: [ 'AutoImage' ],
		toolbar: {
			viewportTopOffset: window.getViewportTopOffsetConfig()
		},
		image: {
			toolbar: [
				'linkImage',
				'|',
				'imageStyle:inline',
				'imageStyle:full',
				'imageStyle:side'
			]
		},
		cloudServices: CS_CONFIG
	} )
	.then( editor => {
		window.editorLinks = editor;
	} )
	.catch( err => {
		console.error( err );
	} );
