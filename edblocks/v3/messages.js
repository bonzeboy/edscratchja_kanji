/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview English strings.
 * @author ascii@media.mit.edu (Andrew Sliwinski)
 *
 * After modifying this file, run `npm run translate` from the root directory
 * to regenerate `./msg/json/en.json`.
 * IMPORTANT:
 * All message strings must use single quotes for the scripts to work properly
 */

/*
 * This file has been modified by bonzeboy as follows
 *  - Translation into Japanese
 */

'use strict';

goog.provide('Blockly.Msg.en');

goog.require('Blockly.Msg');

// Control blocks
Blockly.Msg.CONTROL_FOREVER = 'forever';
Blockly.Msg.CONTROL_REPEAT = 'repeat %1';
Blockly.Msg.CONTROL_IF = 'if %1 then';
Blockly.Msg.CONTROL_ELSE = 'else';
Blockly.Msg.CONTROL_STOP = 'stop';
Blockly.Msg.CONTROL_STOP_ALL = 'all';
Blockly.Msg.CONTROL_STOP_THIS = 'this script';
Blockly.Msg.CONTROL_STOP_OTHER = 'other scripts in sprite';
Blockly.Msg.CONTROL_WAIT = 'wait %1 seconds';
Blockly.Msg.CONTROL_WAITUNTIL = 'wait until %1';
Blockly.Msg.CONTROL_REPEATUNTIL = 'repeat until %1';
Blockly.Msg.CONTROL_WHILE = 'while %1';
Blockly.Msg.CONTROL_FOREACH = 'for each %1 in %2';
Blockly.Msg.CONTROL_STARTASCLONE = 'when I start as a clone';
Blockly.Msg.CONTROL_CREATECLONEOF = 'create clone of %1';
Blockly.Msg.CONTROL_CREATECLONEOF_MYSELF = 'myself';
Blockly.Msg.CONTROL_DELETETHISCLONE = 'delete this clone';
Blockly.Msg.CONTROL_COUNTER = 'counter';
Blockly.Msg.CONTROL_INCRCOUNTER = 'increment counter';
Blockly.Msg.CONTROL_CLEARCOUNTER = 'clear counter';
Blockly.Msg.CONTROL_ALLATONCE = 'all at once';

// Data blocks
Blockly.Msg.DATA_SETVARIABLETO = 'set %1 to %2';
Blockly.Msg.DATA_CHANGEVARIABLEBY = 'change %1 by %2';
Blockly.Msg.DATA_SHOWVARIABLE = 'show variable %1';
Blockly.Msg.DATA_HIDEVARIABLE = 'hide variable %1';
Blockly.Msg.DATA_ADDTOLIST = 'add %1 to %2';
Blockly.Msg.DATA_DELETEOFLIST = 'delete %1 of %2';
Blockly.Msg.DATA_DELETEALLOFLIST = 'delete all of %1';
Blockly.Msg.DATA_INSERTATLIST = 'insert %1 at %2 of %3';
Blockly.Msg.DATA_REPLACEITEMOFLIST = 'replace item %1 of %2 with %3';
Blockly.Msg.DATA_ITEMOFLIST = 'item %1 of %2';
Blockly.Msg.DATA_ITEMNUMOFLIST = 'item # of %1 in %2';
Blockly.Msg.DATA_LENGTHOFLIST = 'length of %1';
Blockly.Msg.DATA_LISTCONTAINSITEM = '%1 contains %2?';
Blockly.Msg.DATA_SHOWLIST = 'show list %1';
Blockly.Msg.DATA_HIDELIST = 'hide list %1';
Blockly.Msg.DATA_INDEX_ALL = 'all';
Blockly.Msg.DATA_INDEX_LAST = 'last';
Blockly.Msg.DATA_INDEX_RANDOM = 'random';

// Event blocks
Blockly.Msg.EVENT_WHENFLAGCLICKED = 'when %1 clicked';
Blockly.Msg.EVENT_WHENTHISSPRITECLICKED = 'when this sprite clicked';
Blockly.Msg.EVENT_WHENSTAGECLICKED = 'when stage clicked';
Blockly.Msg.EVENT_WHENTOUCHINGOBJECT = 'when this sprite touches %1';
Blockly.Msg.EVENT_WHENBROADCASTRECEIVED = 'when I receive %1';
Blockly.Msg.EVENT_WHENBACKDROPSWITCHESTO = 'when backdrop switches to %1';
Blockly.Msg.EVENT_WHENGREATERTHAN = 'when %1 > %2';
Blockly.Msg.EVENT_WHENGREATERTHAN_TIMER = 'timer';
Blockly.Msg.EVENT_WHENGREATERTHAN_LOUDNESS = 'loudness';
Blockly.Msg.EVENT_BROADCAST = 'broadcast %1';
Blockly.Msg.EVENT_BROADCASTANDWAIT = 'broadcast %1 and wait';
Blockly.Msg.EVENT_WHENKEYPRESSED = 'when %1 key pressed';
Blockly.Msg.EVENT_WHENKEYPRESSED_SPACE = 'space';
Blockly.Msg.EVENT_WHENKEYPRESSED_LEFT = 'left arrow';
Blockly.Msg.EVENT_WHENKEYPRESSED_RIGHT = 'right arrow';
Blockly.Msg.EVENT_WHENKEYPRESSED_DOWN = 'down arrow';
Blockly.Msg.EVENT_WHENKEYPRESSED_UP = 'up arrow';
Blockly.Msg.EVENT_WHENKEYPRESSED_ANY = 'any';

// Looks blocks
Blockly.Msg.LOOKS_SAYFORSECS = 'say %1 for %2 seconds';
Blockly.Msg.LOOKS_SAY = 'say %1';
Blockly.Msg.LOOKS_HELLO = 'Hello!';
Blockly.Msg.LOOKS_THINKFORSECS = 'think %1 for %2 seconds';
Blockly.Msg.LOOKS_THINK = 'think %1';
Blockly.Msg.LOOKS_HMM = 'Hmm...';
Blockly.Msg.LOOKS_SHOW = 'show';
Blockly.Msg.LOOKS_HIDE = 'hide';
Blockly.Msg.LOOKS_HIDEALLSPRITES = 'hide all sprites';
Blockly.Msg.LOOKS_EFFECT_COLOR = 'color';
Blockly.Msg.LOOKS_EFFECT_FISHEYE = 'fisheye';
Blockly.Msg.LOOKS_EFFECT_WHIRL = 'whirl';
Blockly.Msg.LOOKS_EFFECT_PIXELATE = 'pixelate';
Blockly.Msg.LOOKS_EFFECT_MOSAIC = 'mosaic';
Blockly.Msg.LOOKS_EFFECT_BRIGHTNESS = 'brightness';
Blockly.Msg.LOOKS_EFFECT_GHOST = 'ghost';
Blockly.Msg.LOOKS_CHANGEEFFECTBY = 'change %1 effect by %2';
Blockly.Msg.LOOKS_SETEFFECTTO = 'set %1 effect to %2';
Blockly.Msg.LOOKS_CLEARGRAPHICEFFECTS = 'clear graphic effects';
Blockly.Msg.LOOKS_CHANGESIZEBY = 'change size by %1';
Blockly.Msg.LOOKS_SETSIZETO = 'set size to %1 %';
Blockly.Msg.LOOKS_SIZE = 'size';
Blockly.Msg.LOOKS_CHANGESTRETCHBY = 'change stretch by %1';
Blockly.Msg.LOOKS_SETSTRETCHTO = 'set stretch to %1 %';
Blockly.Msg.LOOKS_SWITCHCOSTUMETO = 'switch costume to %1';
Blockly.Msg.LOOKS_NEXTCOSTUME = 'next costume';
Blockly.Msg.LOOKS_SWITCHBACKDROPTO = 'switch backdrop to %1';
Blockly.Msg.LOOKS_GOTOFRONTBACK = 'go to %1 layer';
Blockly.Msg.LOOKS_GOTOFRONTBACK_FRONT = 'front';
Blockly.Msg.LOOKS_GOTOFRONTBACK_BACK = 'back';
Blockly.Msg.LOOKS_GOFORWARDBACKWARDLAYERS = 'go %1 %2 layers';
Blockly.Msg.LOOKS_GOFORWARDBACKWARDLAYERS_FORWARD = 'forward';
Blockly.Msg.LOOKS_GOFORWARDBACKWARDLAYERS_BACKWARD = 'backward';
Blockly.Msg.LOOKS_BACKDROPNUMBERNAME = 'backdrop %1';
Blockly.Msg.LOOKS_COSTUMENUMBERNAME = 'costume %1';
Blockly.Msg.LOOKS_NUMBERNAME_NUMBER = 'number';
Blockly.Msg.LOOKS_NUMBERNAME_NAME = 'name';
Blockly.Msg.LOOKS_SWITCHBACKDROPTOANDWAIT = 'switch backdrop to %1 and wait';
Blockly.Msg.LOOKS_NEXTBACKDROP_BLOCK = 'next backdrop';
Blockly.Msg.LOOKS_NEXTBACKDROP = 'next backdrop';
Blockly.Msg.LOOKS_PREVIOUSBACKDROP = 'previous backdrop';
Blockly.Msg.LOOKS_RANDOMBACKDROP = 'random backdrop';

// Motion blocks
Blockly.Msg.MOTION_MOVESTEPS = 'move %1 steps';
Blockly.Msg.MOTION_TURNLEFT = 'turn %1 %2 degrees';
Blockly.Msg.MOTION_TURNRIGHT = 'turn %1 %2 degrees';
Blockly.Msg.MOTION_POINTINDIRECTION = 'point in direction %1';
Blockly.Msg.MOTION_POINTTOWARDS = 'point towards %1';
Blockly.Msg.MOTION_POINTTOWARDS_POINTER = 'mouse-pointer';
Blockly.Msg.MOTION_POINTTOWARDS_RANDOM = 'random direction';
Blockly.Msg.MOTION_GOTO = 'go to %1';
Blockly.Msg.MOTION_GOTO_POINTER = 'mouse-pointer';
Blockly.Msg.MOTION_GOTO_RANDOM = 'random position';
Blockly.Msg.MOTION_GOTOXY = 'go to x: %1 y: %2';
Blockly.Msg.MOTION_GLIDESECSTOXY = 'glide %1 secs to x: %2 y: %3';
Blockly.Msg.MOTION_GLIDETO = 'glide %1 secs to %2';
Blockly.Msg.MOTION_GLIDETO_POINTER = 'mouse-pointer';
Blockly.Msg.MOTION_GLIDETO_RANDOM = 'random position';
Blockly.Msg.MOTION_CHANGEXBY = 'change x by %1';
Blockly.Msg.MOTION_SETX = 'set x to %1';
Blockly.Msg.MOTION_CHANGEYBY = 'change y by %1';
Blockly.Msg.MOTION_SETY = 'set y to %1';
Blockly.Msg.MOTION_IFONEDGEBOUNCE = 'if on edge, bounce';
Blockly.Msg.MOTION_SETROTATIONSTYLE = 'set rotation style %1';
Blockly.Msg.MOTION_SETROTATIONSTYLE_LEFTRIGHT = 'left-right';
Blockly.Msg.MOTION_SETROTATIONSTYLE_DONTROTATE = 'don\'t rotate';
Blockly.Msg.MOTION_SETROTATIONSTYLE_ALLAROUND = 'all around';
Blockly.Msg.MOTION_XPOSITION = 'x position';
Blockly.Msg.MOTION_YPOSITION = 'y position';
Blockly.Msg.MOTION_DIRECTION = 'direction';
Blockly.Msg.MOTION_SCROLLRIGHT = 'scroll right %1';
Blockly.Msg.MOTION_SCROLLUP = 'scroll up %1';
Blockly.Msg.MOTION_ALIGNSCENE = 'align scene %1';
Blockly.Msg.MOTION_ALIGNSCENE_BOTTOMLEFT = 'bottom-left';
Blockly.Msg.MOTION_ALIGNSCENE_BOTTOMRIGHT = 'bottom-right';
Blockly.Msg.MOTION_ALIGNSCENE_MIDDLE = 'middle';
Blockly.Msg.MOTION_ALIGNSCENE_TOPLEFT = 'top-left';
Blockly.Msg.MOTION_ALIGNSCENE_TOPRIGHT = 'top-right';
Blockly.Msg.MOTION_XSCROLL = 'x scroll';
Blockly.Msg.MOTION_YSCROLL = 'y scroll';
Blockly.Msg.MOTION_STAGE_SELECTED = 'Stage selected: no motion blocks';

// Operators blocks
Blockly.Msg.OPERATORS_ADD = '%1 + %2';
Blockly.Msg.OPERATORS_SUBTRACT = '%1 - %2';
Blockly.Msg.OPERATORS_MULTIPLY = '%1 * %2';
Blockly.Msg.OPERATORS_DIVIDE = '%1 / %2';
Blockly.Msg.OPERATORS_RANDOM = 'pick random %1 to %2';
Blockly.Msg.OPERATORS_GT = '%1 > %2';
Blockly.Msg.OPERATORS_LT = '%1 < %2';
Blockly.Msg.OPERATORS_EQUALS = '%1 = %2';
Blockly.Msg.OPERATORS_AND = '%1 and %2';
Blockly.Msg.OPERATORS_OR = '%1 or %2';
Blockly.Msg.OPERATORS_NOT = 'not %1';
Blockly.Msg.OPERATORS_JOIN = 'join %1 %2';
Blockly.Msg.OPERATORS_JOIN_APPLE = 'apple';
Blockly.Msg.OPERATORS_JOIN_BANANA = 'banana';
Blockly.Msg.OPERATORS_LETTEROF = 'letter %1 of %2';
Blockly.Msg.OPERATORS_LETTEROF_APPLE = 'a';
Blockly.Msg.OPERATORS_LENGTH = 'length of %1';
Blockly.Msg.OPERATORS_CONTAINS = '%1 contains %2?';
Blockly.Msg.OPERATORS_MOD = '%1 mod %2';
Blockly.Msg.OPERATORS_ROUND = 'round %1';
Blockly.Msg.OPERATORS_MATHOP = '%1 of %2';
Blockly.Msg.OPERATORS_MATHOP_ABS = 'abs';
Blockly.Msg.OPERATORS_MATHOP_FLOOR = 'floor';
Blockly.Msg.OPERATORS_MATHOP_CEILING = 'ceiling';
Blockly.Msg.OPERATORS_MATHOP_SQRT = 'sqrt';
Blockly.Msg.OPERATORS_MATHOP_SIN = 'sin';
Blockly.Msg.OPERATORS_MATHOP_COS = 'cos';
Blockly.Msg.OPERATORS_MATHOP_TAN = 'tan';
Blockly.Msg.OPERATORS_MATHOP_ASIN = 'asin';
Blockly.Msg.OPERATORS_MATHOP_ACOS = 'acos';
Blockly.Msg.OPERATORS_MATHOP_ATAN = 'atan';
Blockly.Msg.OPERATORS_MATHOP_LN = 'ln';
Blockly.Msg.OPERATORS_MATHOP_LOG = 'log';
Blockly.Msg.OPERATORS_MATHOP_EEXP = 'e ^';
Blockly.Msg.OPERATORS_MATHOP_10EXP = '10 ^';

// Procedures blocks
Blockly.Msg.PROCEDURES_DEFINITION = 'define %1';

// Sensing blocks
Blockly.Msg.SENSING_TOUCHINGOBJECT = 'touching %1?';
Blockly.Msg.SENSING_TOUCHINGOBJECT_POINTER = 'mouse-pointer';
Blockly.Msg.SENSING_TOUCHINGOBJECT_EDGE = 'edge';
Blockly.Msg.SENSING_TOUCHINGCOLOR = 'touching color %1?';
Blockly.Msg.SENSING_COLORISTOUCHINGCOLOR = 'color %1 is touching %2?';
Blockly.Msg.SENSING_DISTANCETO = 'distance to %1';
Blockly.Msg.SENSING_DISTANCETO_POINTER = 'mouse-pointer';
Blockly.Msg.SENSING_ASKANDWAIT = 'ask %1 and wait';
Blockly.Msg.SENSING_ASK_TEXT = 'What\'s your name?';
Blockly.Msg.SENSING_ANSWER = 'answer';
Blockly.Msg.SENSING_KEYPRESSED = 'key %1 pressed?';
Blockly.Msg.SENSING_MOUSEDOWN = 'mouse down?';
Blockly.Msg.SENSING_MOUSEX = 'mouse x';
Blockly.Msg.SENSING_MOUSEY = 'mouse y';
Blockly.Msg.SENSING_SETDRAGMODE = 'set drag mode %1';
Blockly.Msg.SENSING_SETDRAGMODE_DRAGGABLE = 'draggable';
Blockly.Msg.SENSING_SETDRAGMODE_NOTDRAGGABLE = 'not draggable';
Blockly.Msg.SENSING_LOUDNESS = 'loudness';
Blockly.Msg.SENSING_LOUD = 'loud?';
Blockly.Msg.SENSING_TIMER = 'timer';
Blockly.Msg.SENSING_RESETTIMER = 'reset timer';
Blockly.Msg.SENSING_OF = '%1 of %2';
Blockly.Msg.SENSING_OF_XPOSITION = 'x position';
Blockly.Msg.SENSING_OF_YPOSITION = 'y position';
Blockly.Msg.SENSING_OF_DIRECTION = 'direction';
Blockly.Msg.SENSING_OF_COSTUMENUMBER = 'costume #';
Blockly.Msg.SENSING_OF_COSTUMENAME = 'costume name';
Blockly.Msg.SENSING_OF_SIZE = 'size';
Blockly.Msg.SENSING_OF_VOLUME = 'volume';
Blockly.Msg.SENSING_OF_BACKDROPNUMBER = 'backdrop #';
Blockly.Msg.SENSING_OF_BACKDROPNAME = 'backdrop name';
Blockly.Msg.SENSING_OF_STAGE = 'Stage';
Blockly.Msg.SENSING_CURRENT = 'current %1';
Blockly.Msg.SENSING_CURRENT_YEAR = 'year';
Blockly.Msg.SENSING_CURRENT_MONTH = 'month';
Blockly.Msg.SENSING_CURRENT_DATE = 'date';
Blockly.Msg.SENSING_CURRENT_DAYOFWEEK = 'day of week';
Blockly.Msg.SENSING_CURRENT_HOUR = 'hour';
Blockly.Msg.SENSING_CURRENT_MINUTE = 'minute';
Blockly.Msg.SENSING_CURRENT_SECOND = 'second';
Blockly.Msg.SENSING_DAYSSINCE2000 = 'days since 2000';
Blockly.Msg.SENSING_USERNAME = 'username';
Blockly.Msg.SENSING_USERID = 'user id';

// Sound blocks
Blockly.Msg.SOUND_PLAY = 'start sound %1';
Blockly.Msg.SOUND_PLAYUNTILDONE = 'play sound %1 until done';
Blockly.Msg.SOUND_STOPALLSOUNDS = 'stop all sounds';
Blockly.Msg.SOUND_SETEFFECTO = 'set %1 effect to %2';
Blockly.Msg.SOUND_CHANGEEFFECTBY = 'change %1 effect by %2';
Blockly.Msg.SOUND_CLEAREFFECTS = 'clear sound effects';
Blockly.Msg.SOUND_EFFECTS_PITCH = 'pitch';
Blockly.Msg.SOUND_EFFECTS_PAN = 'pan left/right';
Blockly.Msg.SOUND_CHANGEVOLUMEBY = 'change volume by %1';
Blockly.Msg.SOUND_SETVOLUMETO = 'set volume to %1%';
Blockly.Msg.SOUND_VOLUME = 'volume';
Blockly.Msg.SOUND_RECORD = 'record...';

// Category labels
Blockly.Msg.CATEGORY_MOTION = 'Motion';
Blockly.Msg.CATEGORY_LOOKS = 'Looks';
Blockly.Msg.CATEGORY_SOUND = 'Sound';
Blockly.Msg.CATEGORY_EVENTS = 'Events';
Blockly.Msg.CATEGORY_CONTROL = 'Control';
Blockly.Msg.CATEGORY_SENSING = 'Sensing';
Blockly.Msg.CATEGORY_OPERATORS = 'Operators';
Blockly.Msg.CATEGORY_VARIABLES = 'Variables';
Blockly.Msg.CATEGORY_MYBLOCKS = 'My Blocks';

// Context menus
Blockly.Msg.DUPLICATE = '複製';
Blockly.Msg.DELETE = 'Delete';
Blockly.Msg.ADD_COMMENT = 'Add Comment';
Blockly.Msg.REMOVE_COMMENT = 'Remove Comment';
Blockly.Msg.DELETE_BLOCK = 'ブロックを削除';
Blockly.Msg.DELETE_X_BLOCKS = '%1 個のブロックを削除';
Blockly.Msg.DELETE_ALL_BLOCKS = '%1 個のブロックをすべて削除しますか？';
Blockly.Msg.CLEAN_UP = 'きれいにする';
Blockly.Msg.HELP = 'Help';
Blockly.Msg.UNDO = '取り消し';
Blockly.Msg.REDO = 'やり直し';
Blockly.Msg.EDIT_PROCEDURE = '変更';
Blockly.Msg.SHOW_PROCEDURE_DEFINITION = 'Go to definition';
Blockly.Msg.WORKSPACE_COMMENT_DEFAULT_TEXT = 'Say something...';

// Color
Blockly.Msg.COLOUR_HUE_LABEL = 'Color';
Blockly.Msg.COLOUR_SATURATION_LABEL = 'Saturation';
Blockly.Msg.COLOUR_BRIGHTNESS_LABEL = 'Brightness';

// Variables
// @todo Remove these once fully managed by Scratch VM / Scratch GUI
Blockly.Msg.CHANGE_VALUE_TITLE = 'Change value:';
Blockly.Msg.RENAME_VARIABLE = 'Rename variable';
Blockly.Msg.RENAME_VARIABLE_TITLE = 'Rename all "%1" variables to:';
Blockly.Msg.RENAME_VARIABLE_MODAL_TITLE = 'Rename Variable';
Blockly.Msg.NEW_VARIABLE = 'Make a Variable';
Blockly.Msg.NEW_VARIABLE_TITLE = 'New variable name:';
Blockly.Msg.VARIABLE_MODAL_TITLE = 'New Variable';
Blockly.Msg.VARIABLE_ALREADY_EXISTS = 'A variable named "%1" already exists.';
Blockly.Msg.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE = 'A variable named "%1" already exists for another variable of type "%2".';
Blockly.Msg.DELETE_VARIABLE_CONFIRMATION = 'Delete %1 uses of the "%2" variable?';
Blockly.Msg.CANNOT_DELETE_VARIABLE_PROCEDURE = 'Can\'t delete the variable "%1" because it\'s part of the definition of the function "%2"';
Blockly.Msg.DELETE_VARIABLE = 'Delete the "%1" variable';

// Custom Procedures
// @todo Remove these once fully managed by Scratch VM / Scratch GUI
Blockly.Msg.NEW_PROCEDURE = 'Make a Block';
Blockly.Msg.PROCEDURE_ALREADY_EXISTS = 'A procedure named "%1" already exists.';
Blockly.Msg.PROCEDURE_DEFAULT_NAME = 'block name';
Blockly.Msg.PROCEDURE_USED = 'To delete a block definition, first remove all uses of the block';

// Lists
// @todo Remove these once fully managed by Scratch VM / Scratch GUI
Blockly.Msg.NEW_LIST = 'Make a List';
Blockly.Msg.NEW_LIST_TITLE = 'New list name:';
Blockly.Msg.LIST_MODAL_TITLE = 'New List';
Blockly.Msg.LIST_ALREADY_EXISTS = 'A list named "%1" already exists.';
Blockly.Msg.RENAME_LIST_TITLE = 'Rename all "%1" lists to:';
Blockly.Msg.RENAME_LIST_MODAL_TITLE = 'Rename List';
Blockly.Msg.DEFAULT_LIST_ITEM = 'thing';
Blockly.Msg.DELETE_LIST = 'Delete the "%1" list';
Blockly.Msg.RENAME_LIST = 'Rename list';

// Broadcast Messages
// @todo Remove these once fully managed by Scratch VM / Scratch GUI
Blockly.Msg.NEW_BROADCAST_MESSAGE = 'New message';
Blockly.Msg.NEW_BROADCAST_MESSAGE_TITLE = 'New message name:';
Blockly.Msg.BROADCAST_MODAL_TITLE = 'New Message';
Blockly.Msg.DEFAULT_BROADCAST_MESSAGE_NAME = 'message1';


/// tool tips for dive icons. designed to be dinamic
Blockly.Msg.TOOLTIP_DRIVE_FORWARDS_TIME = "前に進む"
Blockly.Msg.TOOLTIP_DRIVE_BACKWARDS_TIME = "後ろに戻る"
Blockly.Msg.TOOLTIP_DRIVE_LEFT_TIME = "左に進む"
Blockly.Msg.TOOLTIP_DRIVE_RIGHT_TIME = "右に進む"
Blockly.Msg.TOOLTIP_DRIVE_LINE_TRACKING_TIME = "ライントレースする"
Blockly.Msg.TOOLTIP_DRIVE_TIME_SECOND = "秒"
Blockly.Msg.TOOLTIP_DRIVE_TIME_SECONDS = "秒"
Blockly.Msg.TOOLTIP_DRIVE_UNITS_DEGREE = "度"
Blockly.Msg.TOOLTIP_DRIVE_UNITS_DEGREES = "度"
Blockly.Msg.TOOLTIP_DRIVE_STOP = "動きを停止する"
Blockly.Msg.TOOLTIP_DRIVE_FORWARDS_CONTINUE = "前に進む"
Blockly.Msg.TOOLTIP_DRIVE_FORWARDS_LEFT_LIGHT = "左に光を検出したら前に進む"
Blockly.Msg.TOOLTIP_DRIVE_FORWARDS_RIGHT_LIGHT = "右に光を検出したら前に進む"
Blockly.Msg.TOOLTIP_DRIVE_FORWARDS_LINE_ON_WHITE = "白い領域を検出したら前に進む"
Blockly.Msg.TOOLTIP_DRIVE_FORWARDS_LINE_ON_BLACK = "黒い領域を検出したら前に進む"
Blockly.Msg.TOOLTIP_DRIVE_BACKWARDS_CONTINUE = "後ろに戻る"
Blockly.Msg.TOOLTIP_DRIVE_BACKWARDS_LEFT_LIGHT = "左に光を検出したら後ろに戻る"
Blockly.Msg.TOOLTIP_DRIVE_BACKWARDS_RIGHT_LIGHT = "右に光を検出したら後ろに戻る"
Blockly.Msg.TOOLTIP_DRIVE_BACKWARDS_LINE_ON_WHITE = "白い領域を検出したら後ろに戻る"
Blockly.Msg.TOOLTIP_DRIVE_BACKWARDS_LINE_ON_BLACK = "黒い領域を検出したら後ろに戻る"
Blockly.Msg.TOOLTIP_DRIVE_LEFT_CONTINUE = "左に進む"
Blockly.Msg.TOOLTIP_DRIVE_LEFT_LEFT_LIGHT = "左に光を検出したら左に進む"
Blockly.Msg.TOOLTIP_DRIVE_LEFT_RIGHT_LIGHT = "右に光を検出したら左に進む"
Blockly.Msg.TOOLTIP_DRIVE_LEFT_LINE_ON_WHITE = "白い領域を検出したら左に進む"
Blockly.Msg.TOOLTIP_DRIVE_LEFT_LINE_ON_BLACK = "黒い領域を検出したら左に進む"
Blockly.Msg.TOOLTIP_DRIVE_RIGHT_CONTINUE = "右に進む"
Blockly.Msg.TOOLTIP_DRIVE_RIGHT_LEFT_LIGHT = "左に光を検出したら右に進む"
Blockly.Msg.TOOLTIP_DRIVE_RIGHT_RIGHT_LIGHT = "右に光を検出したら右に進む"
Blockly.Msg.TOOLTIP_DRIVE_RIGHT_LINE_ON_WHITE = "白い領域を検出したら右に進む"
Blockly.Msg.TOOLTIP_DRIVE_RIGHT_LINE_ON_BLACK = "黒い領域を検出したら右に進む"
Blockly.Msg.TOOLTIP_DRIVE_LINE_TRACKING_OBSTACLE = "障害物を検出するまでライントレースする"
Blockly.Msg.TOOLTIP_DRIVE_lINE_TRACKING_INFINITE = "ずっとライントレースする"
Blockly.Msg.TOOLTIP_DRIVE_SPEED_1 = "動きを遅くする"
Blockly.Msg.TOOLTIP_DRIVE_SPEED_2 = "動きを中くらいにする"
Blockly.Msg.TOOLTIP_DRIVE_SPEED_3 = "動きを速くする"


//tool tips for the output options
Blockly.Msg.TOOLTIP_LIGHT_SOUND_BOTH_ON = "両方のLEDをONにする"
Blockly.Msg.TOOLTIP_LIGHT_SOUND_RIGHT_ON = "右のLEDをONにする"
Blockly.Msg.TOOLTIP_LIGHT_SOUND_LEFT_ON = "左のLEDをOFFにする"
Blockly.Msg.TOOLTIP_LIGHT_SOUND_BOTH_OFF = "両方のLEDをOFFにする"
Blockly.Msg.TOOLTIP_LIGHT_SOUND_RIGHT_OFF = "右のLEDをONにする"
Blockly.Msg.TOOLTIP_LIGHT_SOUND_LEFT_OFF = "左のLEDをOFFにする"
Blockly.Msg.TOOLTIP_LIGHT_SOUND_BEEP = "ビープ音を鳴らす"
Blockly.Msg.TOOLTIP_LIGHT_SOUND_PLAY_WHOLE_C_HIGH = "C5（ド）を4拍鳴らす"
Blockly.Msg.TOOLTIP_LIGHT_SOUND_PLAY_WHOLE_B_HIGH = "B4（シ）を4拍鳴らす"
Blockly.Msg.TOOLTIP_LIGHT_SOUND_PLAY_WHOLE_A = "A4（ラ）を4拍鳴らす"
Blockly.Msg.TOOLTIP_LIGHT_SOUND_PLAY_WHOLE_G = "G4（ソ）を4拍鳴らす"
Blockly.Msg.TOOLTIP_LIGHT_SOUND_PLAY_WHOLE_F = "F4（ファ）を4拍鳴らす"
Blockly.Msg.TOOLTIP_LIGHT_SOUND_PLAY_WHOLE_E = "E4（ミ）を4拍鳴らす"
Blockly.Msg.TOOLTIP_LIGHT_SOUND_PLAY_WHOLE_D = "D4（レ）を4拍鳴らす"
Blockly.Msg.TOOLTIP_LIGHT_SOUND_PLAY_WHOLE_C = "C4（ド）を4拍鳴らす"
Blockly.Msg.TOOLTIP_LIGHT_SOUND_PLAY_WHOLE_B = "B3（シ）を4拍鳴らす"
Blockly.Msg.TOOLTIP_LIGHT_SOUND_PLAY_HALF_C_HIGH = "C5（ド）を2拍鳴らす"
Blockly.Msg.TOOLTIP_LIGHT_SOUND_PLAY_HALF_B_HIGH = "B4（シ）を2拍鳴らす"
Blockly.Msg.TOOLTIP_LIGHT_SOUND_PLAY_HALF_A = "A4（ラ）を2拍鳴らす"
Blockly.Msg.TOOLTIP_LIGHT_SOUND_PLAY_HALF_G = "G4（ソ）を2拍鳴らす"
Blockly.Msg.TOOLTIP_LIGHT_SOUND_PLAY_HALF_F = "F4（ファ）を2拍鳴らす"
Blockly.Msg.TOOLTIP_LIGHT_SOUND_PLAY_HALF_E = "E4（ミ）を2拍鳴らす"
Blockly.Msg.TOOLTIP_LIGHT_SOUND_PLAY_HALF_D = "D4（レ）を2拍鳴らす"
Blockly.Msg.TOOLTIP_LIGHT_SOUND_PLAY_HALF_C = "C4（ド）を2拍鳴らす"
Blockly.Msg.TOOLTIP_LIGHT_SOUND_PLAY_HALF_B = "B3（シ）を2拍鳴らす"
Blockly.Msg.TOOLTIP_LIGHT_SOUND_PLAY_QUARTER_C_HIGH = "C5（ド）を1拍鳴らす"
Blockly.Msg.TOOLTIP_LIGHT_SOUND_PLAY_QUARTER_B_HIGH = "B4（シ）を1拍鳴らす"
Blockly.Msg.TOOLTIP_LIGHT_SOUND_PLAY_QUARTER_A = "A4（ラ）を1拍鳴らす"
Blockly.Msg.TOOLTIP_LIGHT_SOUND_PLAY_QUARTER_G = "G4（ソ）を1拍鳴らす"
Blockly.Msg.TOOLTIP_LIGHT_SOUND_PLAY_QUARTER_F = "F4（ファ）を1拍鳴らす"
Blockly.Msg.TOOLTIP_LIGHT_SOUND_PLAY_QUARTER_E = "E4（ミ）を1拍鳴らす"
Blockly.Msg.TOOLTIP_LIGHT_SOUND_PLAY_QUARTER_D = "D4（レ）を1拍鳴らす"
Blockly.Msg.TOOLTIP_LIGHT_SOUND_PLAY_QUARTER_C = "C4（ド）を1拍鳴らす"
Blockly.Msg.TOOLTIP_LIGHT_SOUND_PLAY_QUARTER_B = "B3（シ）を1拍鳴らす"
Blockly.Msg.TOOLTIP_LIGHT_SOUND_PLAY_EIGHTH_C_HIGH = "C5（ド）を0.5拍鳴らす"
Blockly.Msg.TOOLTIP_LIGHT_SOUND_PLAY_EIGHTH_B_HIGH = "B4（シ）を0.5拍鳴らす"
Blockly.Msg.TOOLTIP_LIGHT_SOUND_PLAY_EIGHTH_A = "A4（ラ）を0.5拍鳴らす"
Blockly.Msg.TOOLTIP_LIGHT_SOUND_PLAY_EIGHTH_G = "G4（ソ）を0.5拍鳴らす"
Blockly.Msg.TOOLTIP_LIGHT_SOUND_PLAY_EIGHTH_F = "F4（ファ）を0.5拍鳴らす"
Blockly.Msg.TOOLTIP_LIGHT_SOUND_PLAY_EIGHTH_E = "E4（ミ）を0.5拍鳴らす"
Blockly.Msg.TOOLTIP_LIGHT_SOUND_PLAY_EIGHTH_D = "D4（レ）を0.5拍鳴らす"
Blockly.Msg.TOOLTIP_LIGHT_SOUND_PLAY_EIGHTH_C = "C4（ド）を0.5拍鳴らす"
Blockly.Msg.TOOLTIP_LIGHT_SOUND_PLAY_EIGHTH_B = "B3（シ）を0.5拍鳴らす"
Blockly.Msg.TOOLTIP_LIGHT_SOUND_NOTE_SHARP = "次の音を半音上げる";
Blockly.Msg.TOOLTIP_LIGHT_SOUND_NOTE_TEMP_SLOW = "テンポを遅くする"
Blockly.Msg.TOOLTIP_LIGHT_SOUND_NOTE_TEMP_MEDIUM = "テンポを中くらいにする"
Blockly.Msg.TOOLTIP_LIGHT_SOUND_NOTE_TEMP_FAST = "テンポを早くする"
Blockly.Msg.TOOLTIP_LIGHT_SOUND_REST_WHOLE = "4拍休む"
Blockly.Msg.TOOLTIP_LIGHT_SOUND_REST_HALF = "2拍休む"
Blockly.Msg.TOOLTIP_LIGHT_SOUND_REST_QUARTER = "1拍休む"
Blockly.Msg.TOOLTIP_LIGHT_SOUND_REST_EIGHTH = "0.5拍休む"
Blockly.Msg.TOOLTIP_CONTROL_SEND_MESSAGE_1 = "メッセージ（青）を送る"
Blockly.Msg.TOOLTIP_CONTROL_SEND_MESSAGE_2 = "メッセージ（ピンク）を送る"
Blockly.Msg.TOOLTIP_CONTROL_SEND_MESSAGE_3 = "メッセージ（緑）を送る"
Blockly.Msg.TOOLTIP_CONTROL_SEND_MESSAGE_4 = "メッセージ（紫）を送る"
Blockly.Msg.TOOLTIP_CONTROL_SEND_MESSAGE_5 = "メッセージ（オレンジ）を送る"
Blockly.Msg.TOOLTIP_CONTROL_SEND_MESSAGE_6 = "メッセージ（青紫）を送る"

/// tool tips for the wait until options
Blockly.Msg.TOOLTIP_CONTROL_WAIT_TIME = "待つ"
Blockly.Msg.TOOLTIP_CONTROL_WAIT_EVENT_CLAP = "拍手（1回）を検出するまで待つ"
Blockly.Msg.TOOLTIP_CONTROL_WAIT_EVENT_KEY_CIRCLE = "●丸ボタンが押されるまで待つ"
Blockly.Msg.TOOLTIP_CONTROL_WAIT_EVENT_KEY_TRIANGLE = "▲三角ボタンが押されるまで待つ"
Blockly.Msg.TOOLTIP_CONTROL_WAIT_EVENT_CLAP_TWO = "拍手（2回）を検出するまで待つ"
Blockly.Msg.TOOLTIP_CONTROL_WAIT_EVENT_LINE_ON_BLACK = "黒い領域を検出するまで待つ"
Blockly.Msg.TOOLTIP_CONTROL_WAIT_EVENT_LINE_ON_WHITE = "白い領域を検出するまで待つ"
Blockly.Msg.TOOLTIP_CONTROL_WAIT_EVENT_LEFT_LIGHT = "左に光を検出するまで待つ"
Blockly.Msg.TOOLTIP_CONTROL_WAIT_EVENT_RIGHT_LIGHT = "右に光を検出するまで待つ"
Blockly.Msg.TOOLTIP_CONTROL_WAIT_EVENT_OBSTACLE = "障害物を検出するまで待つ"
Blockly.Msg.TOOLTIP_CONTROL_WAIT_MESSAGE_1 = "メッセージ（青）を受信するまで待つ"
Blockly.Msg.TOOLTIP_CONTROL_WAIT_MESSAGE_2 = "メッセージ（ピンク）を受信するまで待つ"
Blockly.Msg.TOOLTIP_CONTROL_WAIT_MESSAGE_3 = "メッセージ（緑）を受信するまで待つ"
Blockly.Msg.TOOLTIP_CONTROL_WAIT_MESSAGE_4 = "メッセージ（紫）を受信するまで待つ"
Blockly.Msg.TOOLTIP_CONTROL_WAIT_MESSAGE_5 = "メッセージ（オレンジ）を受信するまで待つ"
Blockly.Msg.TOOLTIP_CONTROL_WAIT_MESSAGE_6 = "メッセージ（青紫）を受信するまで待つ"

///tool tips for the control options
Blockly.Msg.TOOLTIP_CONTROL_LOOP_FOREVER = "ずっと"
Blockly.Msg.TOOLTIP_CONTROL_LOOP_NUMBER = "繰り返す"
Blockly.Msg.TOOLTIP_CONTROL_LOOP_NUMBER_TIME = "回"
Blockly.Msg.TOOLTIP_CONTROL_LOOP_NUMBER_TIMES = "回"
Blockly.Msg.TOOLTIP_CONTROL_LOOP_EVENT_KEY_CIRCLE = "●丸ボタンが押されるまで繰り返す"
Blockly.Msg.TOOLTIP_CONTROL_LOOP_EVENT_KEY_TRIANGLE = "▲三角ボタンが押されるまで繰り返す"
Blockly.Msg.TOOLTIP_CONTROL_LOOP_OBSTACLE = "障害物を検出するまで繰り返す"
Blockly.Msg.TOOLTIP_CONTROL_STOP = "プログラムを停止する"

///tool tips for the start events
Blockly.Msg.TOOLTIP_NEW_EVENT_START = "スタート"
Blockly.Msg.TOOLTIP_NEW_EVENT_OBSTACLE = "障害物を検出したとき"
Blockly.Msg.TOOLTIP_NEW_EVENT_CLAP = "拍手（1回）を検出したとき"
Blockly.Msg.TOOLTIP_NEW_EVENT_CLAP_TWO = "拍手（2回）を検出したとき"
Blockly.Msg.TOOLTIP_NEW_EVENT_KEY_TRIANGLE = "▲三角ボタンが押されたとき"
Blockly.Msg.TOOLTIP_NEW_EVENT_KEY_CIRCLE = "●丸ボタンが押されたとき"
Blockly.Msg.TOOLTIP_NEW_EVENT_LINE_ON_WHITE = "白い領域を検出したとき"
Blockly.Msg.TOOLTIP_NEW_EVENT_LINE_ON_BLACK = "黒い領域を検出したとき"
Blockly.Msg.TOOLTIP_NEW_EVENT_MESSAGE_1 = "メッセージ（青）を受信したとき"
Blockly.Msg.TOOLTIP_NEW_EVENT_MESSAGE_2 = "メッセージ（ピンク）を受信したとき"
Blockly.Msg.TOOLTIP_NEW_EVENT_MESSAGE_3 = "メッセージ（緑）を受信したとき"
Blockly.Msg.TOOLTIP_NEW_EVENT_MESSAGE_4 = "メッセージ（紫）を受信したとき"
Blockly.Msg.TOOLTIP_NEW_EVENT_MESSAGE_5 = "メッセージ（オレンジ）を受信したとき"
Blockly.Msg.TOOLTIP_NEW_EVENT_MESSAGE_6 = "メッセージ（青紫）を受信したとき"
Blockly.Msg.TOOLTIP_NEW_EVENT_REMOTE_CODE_1 = "リモコンコード（1）を受信したとき"
Blockly.Msg.TOOLTIP_NEW_EVENT_REMOTE_CODE_2 = "リモコンコード（2）を受信したとき"
Blockly.Msg.TOOLTIP_NEW_EVENT_REMOTE_CODE_3 = "リモコンコード（3）を受信したとき"
Blockly.Msg.TOOLTIP_NEW_EVENT_REMOTE_CODE_4 = "リモコンコード（4）を受信したとき"
Blockly.Msg.TOOLTIP_NEW_EVENT_REMOTE_CODE_5 = "リモコンコード（5）を受信したとき"
Blockly.Msg.TOOLTIP_NEW_EVENT_REMOTE_CODE_6 = "リモコンコード（6）を受信したとき"


Blockly.Msg.DEMO_DRIVE_PROGRAM = "動き";
Blockly.Msg.DEMO_DRIVE_PROGRAM_DISC = "前に進み、向きを変えて戻って来る。";
Blockly.Msg.DEMO_DRIVE_SPEED = "速さ";
Blockly.Msg.DEMO_DRIVE_SPEED_DISC = "3種類の速さで1秒ずつ動く。";
Blockly.Msg.DEMO_DRIVE_ON_WHITE = "白い領域を前に進む";
Blockly.Msg.DEMO_DRIVE_ON_WHITE_DISC = "白い領域を前に進み、向きを変える。";
Blockly.Msg.DEMO_MUSIC = "音";
Blockly.Msg.DEMO_MUSIC_DISC = "音を鳴らす。";
Blockly.Msg.DEMO_LED = "光";
Blockly.Msg.DEMO_LED_DISC = "右のLEDを点滅させる。";
Blockly.Msg.DEMO_LOOP_UNTIL = "繰り返す";
Blockly.Msg.DEMO_LOOP_UNTIL_DISC = "●丸ボタンが押されるまで繰り返しビープ音を鳴らす。";
Blockly.Msg.DEMO_WAIT_UNTIL = "待つ";
Blockly.Msg.DEMO_WAIT_UNTIL_DISC = "拍手されるまで待ち、拍手されたらLEDを光らせる。その後、また拍手されるまで待ち、拍手されたらLEDを消す。";
Blockly.Msg.DEMO_START_EVENT = "「押されたとき」イベント";
Blockly.Msg.DEMO_START_EVENT_DISC = "▲三角ボタンが押されたら、「▲三角ボタンが押されたとき」イベントでビープ音を鳴らす。";
Blockly.Msg.DEMO_SEND_MESSAGE = "メッセージを送信する";
Blockly.Msg.DEMO_SEND_MESSAGE_DISC = "●丸ボタンが押されたら、メッセージ（青）を送信する。";
Blockly.Msg.DEMO_RECEIVE_MESSAGE_1 = "メッセージを受信する1";
Blockly.Msg.DEMO_RECEIVE_MESSAGE_1_DISC = "メッセージ（青）を受信したら、ビープ音を鳴らす。";
Blockly.Msg.DEMO_RECEIVE_MESSAGE_2 = "メッセージを受信する2";
Blockly.Msg.DEMO_RECEIVE_MESSAGE_2_DISC = "メッセージ（青）を受信したら、「メッセージ（青）を受信したとき」イベントでビープ音を鳴らす。";
Blockly.Msg.DEMO_AVOID_OBSTACLES = "障害物の回避";
Blockly.Msg.DEMO_AVOID_OBSTACLES_DISC = "障害物を検出するまで前に進み、向きを変える。";
Blockly.Msg.DEMO_CLAP_CONTROL = "拍手で運転する";
Blockly.Msg.DEMO_CLAP_CONTROL_DISC = "手を1回叩くと前に進み、2回叩くと向きを変える。";
Blockly.Msg.DEMO_FOLLOW_TORCH = "光を追いかける";
Blockly.Msg.DEMO_FOLLOW_TORCH_DISC = "光センサを使って光に向かって動く。";
Blockly.Msg.DEMO_BOUNCE_IN_BORDERS = "境界線で跳ね返る";
Blockly.Msg.DEMO_BOUNCE_IN_BORDERS_DISC = "ライン検出を使って黒い境界線の内側を動く。";
