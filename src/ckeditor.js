/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import StrikeThrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Subsript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import WordCount from '@ckeditor/ckeditor5-word-count/src/wordcount';
import Autosave from '@ckeditor/ckeditor5-autosave/src/autosave';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor';
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor';
import TodoList from '@ckeditor/ckeditor5-list/src/todolist';
import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters';
import SpecialCharactersEssentials from '@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials';
import SpecialCharactersArrows from '@ckeditor/ckeditor5-special-characters/src/specialcharactersarrows';
import SpecialCharactersCurrency from '@ckeditor/ckeditor5-special-characters/src/specialcharacterscurrency';
import SpecialCharactersLatin from '@ckeditor/ckeditor5-special-characters/src/specialcharacterslatin';
import SpecialCharactersMathematical from '@ckeditor/ckeditor5-special-characters/src/specialcharactersmathematical';
import SpecialCharactersText from '@ckeditor/ckeditor5-special-characters/src/specialcharacterstext';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
export default class ClassicEditor extends ClassicEditorBase { }
function SpecialCharactersEmoji( editor ) {
	editor.plugins.get( 'SpecialCharacters' ).addItems( 'Emoji', [
		{ title: 'smiley face', character: '😊' },
		{ title: 'grinning face', character: '😁' },
		{ title: 'heart face', character: '😍' },
		{ title: 'kissing face', character: '😘' },
		{ title: 'quiet face', character: '🤫' },
		{ title: 'thinking face', character: '🤔' },
		{ title: 'smirking  face', character: '😏' },
		{ title: 'unamused  face', character: '😒' },
		{ title: 'relieved  face', character: '😌' },
		{ title: 'sad face', character: '😔' },
		{ title: 'inlove face', character: '🥰' },
		{ title: 'shamed face', character: '😳' },
		{ title: 'cool face', character: '😎' },
		{ title: 'fine face', character: '🙂' },
		{ title: 'straight face', character: '😑' },
		{ title: 'rocket', character: '🚀' },
		{ title: 'wind blowing face', character: '🌬️' },
		{ title: 'floppy disk', character: '💾' },
		{ title: 'heart', character: '❤️' }
	] );
}
// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	StrikeThrough,
	Subsript,
	Superscript,
	Underline,
	BlockQuote,
	CKFinder,
	EasyImage,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	ImageResize,
	Indent,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	TextTransformation,
	WordCount,
	Autosave,
	FontFamily,
	FontSize,
	FontColor,
	FontBackgroundColor,
	TodoList,
	SpecialCharacters,
	SpecialCharactersEssentials,
	SpecialCharactersEmoji,
	SpecialCharactersArrows,
	SpecialCharactersCurrency,
	SpecialCharactersLatin,
	SpecialCharactersMathematical,
	SpecialCharactersText,
	Alignment
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'fontFamily',
			'fontSize',
			'fontColor',
			'fontBackgroundColor',
			'bold',
			'italic',
			'strikethrough',
			'subscript',
			'superscript',
			'underline',
			'link',
			'todoList',
			'bulletedList',
			'numberedList',
			'specialCharacters',
			'|',
			'indent',
			'outdent',
			'|',
			'alignment:left',
			'alignment:right',
			'alignment:center',
			'alignment:justify',
			'imageUpload',
			'blockQuote',
			'insertTable',
			'mediaEmbed',
			'undo',
			'redo'
		]
	},
	image: {
		// You need to configure the image toolbar, too, so it uses the new style buttons.
		toolbar: [ 'imageTextAlternative', '|', 'imageStyle:alignLeft', 'imageStyle:full', 'imageStyle:alignRight' ],

		styles: [
			// This option is equal to a situation where no style is applied.
			'full',

			// This represents an image aligned to the left.
			'alignLeft',

			// This represents an image aligned to the right.
			'alignRight'
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	},
	fontSize: {
		options: [
			9,
			11,
			13,
			'default',
			17,
			19,
			21
		]
	},
	fontColor: {
		// Display 6 columns in the color grid.
		columns: 6,

		// And 12 document colors (2 rows of them).
		documentColors: 12

		// ...
	},
	fontBackgroundColor: {
		// Remove the "Document colors" section.
		documentColors: 12

		// ...
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'vi'
};
