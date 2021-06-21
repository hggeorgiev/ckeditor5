/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import List from '@ckeditor/ckeditor5-list/src/list';

export default class RCHEditor extends ClassicEditorBase {}

// Plugins to include in the build.
RCHEditor.builtinPlugins = [
	Essentials,
	Autoformat,
	Paragraph,
	List,
	TextTransformation
];

// Editor configuration.
RCHEditor.defaultConfig = {
	toolbar: {
		items: [ 'bulletedList' ]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'de'
};
