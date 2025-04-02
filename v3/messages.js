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
'use strict';

goog.provide('Blockly.Msg.en');

goog.require('Blockly.Msg');

// Control blocks
Blockly.Msg.CONTROL_FOREVER = 'ずっと';
Blockly.Msg.CONTROL_REPEAT = '回繰り返す';
Blockly.Msg.CONTROL_IF = 'もし';
Blockly.Msg.CONTROL_THAN = 'なら';
Blockly.Msg.CONTROL_ELSE = 'でなければ';
Blockly.Msg.CONTROL_STOP = 'stop';
Blockly.Msg.CONTROL_STOP_ALL = 'all';
Blockly.Msg.CONTROL_STOP_THIS = 'this script';
Blockly.Msg.CONTROL_STOP_OTHER = 'other scripts in sprite';
Blockly.Msg.CONTROL_WAIT = '待つ';
Blockly.Msg.CONTROL_WAIT_SEC = '秒';
Blockly.Msg.CONTROL_WAIT_MILLISECONDS = 'ミリ秒';
Blockly.Msg.CONTROL_WAITUNTIL = 'まで待つ';
Blockly.Msg.CONTROL_REPEATUNTIL = 'まで繰り返す';
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
Blockly.Msg.DATA_BUTTONCREATE = '変数を作る';
Blockly.Msg.DATA_BUTTONMANAGE = '変数を管理する';
//Blockly.Msg.DATA_SETVARIABLETO = '';
Blockly.Msg.DATA_SET = "にする";
Blockly.Msg.DATA_TO = "を";
Blockly.Msg.DATA_INCVARIABLE = 'を1ずつ変える';
Blockly.Msg.DATA_DECVARIABLE = 'を-1ずつ変える';
Blockly.Msg.DATA_BITSHIFT = "ビットシフトする";
Blockly.Msg.DATA_BITSHIFTLEFT = 'を左に';
Blockly.Msg.DATA_BITSHIFTRIGHT = 'を右に';


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
Blockly.Msg.EVENT_ANY_OBSTACLE = '何か障害物が検出されたとき';
Blockly.Msg.EVENT_OBSTACLE_AHEAD = '前に障害物が検出されたとき';
Blockly.Msg.EVENT_OBSTACLE_LEFT = '左に障害物が検出されたとき';
Blockly.Msg.EVENT_OBSTACLE_RIGHT = '右に障害物が検出されたとき';
Blockly.Msg.EVENT_CLAP = '拍手が検出されたとき';
Blockly.Msg.EVENT_BUTTON_TRIANGLE = '▲三角ボタンが押されたとき';
Blockly.Msg.EVENT_BUTTON_ROUND = '●丸ボタンが押されたとき';
Blockly.Msg.EVENT_LINE_REFLECTIVE = 'ライン検出で反射面が検出されたとき';
Blockly.Msg.EVENT_LINE_NON_REFLECTIVE = 'ライン検出で非反射面が検出されたとき';
Blockly.Msg.EVENT_LINE_CHANGE = 'ライン検出の検出状態が変化したとき';
Blockly.Msg.EVENT_MESSAGE = '赤外線メッセージを受信したとき';
Blockly.Msg.EVENT_REMOTE = 'リモコンコードを受信したとき';
Blockly.Msg.EVENT_DRIVE_STRAIN = '動きの異常が検出されたとき';
Blockly.Msg.EVENT_START = 'スタート';




// Looks blocks

// Motion blocks
// Operators blocks
Blockly.Msg.OPERATORS_ADD = '%1 + %2';
Blockly.Msg.OPERATORS_SUBTRACT = '%1 - %2';
Blockly.Msg.OPERATORS_MULTIPLY = '%1 * %2';
Blockly.Msg.OPERATORS_DIVIDE = '%1 / %2';
Blockly.Msg.OPERATORS_RANDOM_FROM = 'から';
Blockly.Msg.OPERATORS_RANDOM_TO = 'までの乱数';
Blockly.Msg.OPERATORS_LT = '%1 < %2';
Blockly.Msg.OPERATORS_LT_EQUAL = '%1 <= %2';
Blockly.Msg.OPERATORS_EQUALS = '%1 = %2';
Blockly.Msg.OPERATORS_GT_EQUAL = '%1 >= %2';
Blockly.Msg.OPERATORS_GT = '%1 > %2';
Blockly.Msg.OPERATORS_AND = 'かつ';
Blockly.Msg.OPERATORS_OR = 'または';
Blockly.Msg.OPERATORS_NOT_EQUALS = '%1 != %2';
Blockly.Msg.OPERATORS_NOT = 'ではない';
Blockly.Msg.OPERATORS_ABS = 'の絶対値';
Blockly.Msg.OPERATORS_BETWEEN_IS = 'が';
Blockly.Msg.OPERATORS_BETWEEN_FROM = 'から';
Blockly.Msg.OPERATORS_BETWEEN_TO = 'までに含まれる';




// Procedures blocks
Blockly.Msg.PROCEDURES_DEFINITION = 'define %1';

// Sensing blocks
Blockly.Msg.SENSING_TURN_LINE_TRACKING_LED = 'ライン検出を';
Blockly.Msg.SENSING_TURN_SET = 'にする';
Blockly.Msg.SENSING_TURN_OBSTACLE_BEAM = '障害物検出を';
Blockly.Msg.SENSING_SENSOR = 'のデータを';
Blockly.Msg.SENSING_CLEAR = 'クリアする';
Blockly.Msg.SENSING_CLAP_DETECTED = '拍手が検出された';
Blockly.Msg.SENSING_BUTTON_PRESSED = 'が押された';
Blockly.Msg.SENSING_OBSTACLE = '障害物が検出された';
Blockly.Msg.SENSING_LINE_TRACKER = 'ライン検出で';
Blockly.Msg.SENSING_LINE_SURFACE = "が検出された";
Blockly.Msg.SENSING_REMOTE_NUM = '受信したリモコンコード';
Blockly.Msg.SENSING_REMOTE_BOOL = 'リモコンコード';
Blockly.Msg.SENSING_REMOTE_RECEIVED = 'を受信した';
Blockly.Msg.SENSING_IR_MESSAGE_DETECTED = '赤外線メッセージを受信した';
Blockly.Msg.SENSING_IR_MESSAGE = '受信した赤外線メッセージ';
Blockly.Msg.SENSING_LIGHT_LEVEL = '';
Blockly.Msg.SENSING_LIGHT_SENSOR = 'で検出された光量';
Blockly.Msg.SENSING_DRIVE_STRAIN = '動きの異常が検出された';

Blockly.Msg.SENSING_DROPDOWN_ON = "ON";
Blockly.Msg.SENSING_DROPDOWN_OFF = "OFF";

Blockly.Msg.SENSING_CLEAR_DROPDOWN_CLAP = "拍手検出";
Blockly.Msg.SENSING_CLEAR_DROPDOWN_KEY = "ボタン";
Blockly.Msg.SENSING_CLEAR_DROPDOWN_OBS = "障害物検出";
Blockly.Msg.SENSING_CLEAR_DROPDOWN_REMOTE = "リモコンコード";
Blockly.Msg.SENSING_CLEAR_DROPDOWN_IR = "赤外線メッセージ";

Blockly.Msg.SENSING_KEY_DROPDOWN_ROUND = "●丸ボタン";
Blockly.Msg.SENSING_KEY_DROPDOWN_TRIANGLE = "▲三角ボタン";

Blockly.Msg.SENSING_OBS_DROPDOWN_ANY = "何か";
Blockly.Msg.SENSING_OBS_DROPDOWN_AHEAD = "前に";
Blockly.Msg.SENSING_OBS_DROPDOWN_LEFT = "左に";
Blockly.Msg.SENSING_OBS_DROPDOWN_RIGHT = "右に";

Blockly.Msg.SENSING_LINE_DROPDOWN_WHITE = "反射面";
Blockly.Msg.SENSING_LINE_DROPDOWN_BLACK = "非反射面";

Blockly.Msg.SENSING_LIGHT_DROPDOWN_LEFT = "左の光センサ";
Blockly.Msg.SENSING_LIGHT_DROPDOWN_RIGHT = "右の光センサ";
Blockly.Msg.SENSING_LIGHT_DROPDOWN_LINE = "ライン検出";

Blockly.Msg.COMMENT_USER_COMMENT = 'コメント:';

Blockly.Msg.ADVANCED_USB_SEND_DATA = 'USBにデータ';
Blockly.Msg.ADVANCED_USB_SEND_VIA = 'を送信する';
Blockly.Msg.ADVANCED_USB_RECEIVED_DATA = 'data received from USB';
Blockly.Msg.ADVANCED_USB_RECEIVED_DATA_VAR = 'USBから';
Blockly.Msg.ADVANCED_USB_RECEIVED_DATA_VAR_TO = 'にデータを受信する';

// Sound blocks
Blockly.Msg.SOUND_BEEP = "ビープ音を鳴らす";
Blockly.Msg.SOUND_PLAY_NOTE = '鳴らす';
Blockly.Msg.SOUND_PLAY_NOTE_ON = 'を';
Blockly.Msg.SOUND_PLAY_NOTE_DROP_DURATION_WHOLE = "4拍";
Blockly.Msg.SOUND_PLAY_NOTE_DROP_DURATION_HALF = "2拍";
Blockly.Msg.SOUND_PLAY_NOTE_DROP_DURATION_QUARTER = "1拍";
Blockly.Msg.SOUND_PLAY_NOTE_DROP_DURATION_EIGHTH = "0.5拍";
Blockly.Msg.SOUND_PLAY_NOTE_DROP_NOTE_C = "C5（ド）";
Blockly.Msg.SOUND_PLAY_NOTE_DROP_NOTE_B = "B4（シ）";
Blockly.Msg.SOUND_PLAY_NOTE_DROP_NOTE_A = "A4（ラ）";
Blockly.Msg.SOUND_PLAY_NOTE_DROP_NOTE_G = "G4（ソ）";
Blockly.Msg.SOUND_PLAY_NOTE_DROP_NOTE_F = "F4（ファ）";
Blockly.Msg.SOUND_PLAY_NOTE_DROP_NOTE_E = "E4（ミ）";
Blockly.Msg.SOUND_PLAY_NOTE_DROP_NOTE_D = "D4（レ）";
Blockly.Msg.SOUND_PLAY_NOTE_DROP_NOTE_MID_C = "C4（ド）";
Blockly.Msg.SOUND_PLAY_NOTE_DROP_NOTE_LOW_B = "B3（シ）";
Blockly.Msg.SOUND_PLAY_NOTE_DROP_NOTE_REST = "休符";
Blockly.Msg.SOUND_PLAY_NOTE_DROP_MOD_NORMAL = " - ";
Blockly.Msg.SOUND_PLAY_NOTE_DROP_MOD_SHARP = "シャープ";
Blockly.Msg.SOUND_PLAY_NOTE_DROP_MOD_FLAT = "フラット";

Blockly.Msg.SOUND_SET_TEMPO = "テンポを";
Blockly.Msg.SOUND_SET_TEMPO_TO = "にする";
Blockly.Msg.SOUND_SET_TEMPO_DROP_VERY_SLOW = "とても遅い";
Blockly.Msg.SOUND_SET_TEMPO_DROP_SLOW = "遅い";
Blockly.Msg.SOUND_SET_TEMPO_DROP_MEDIUM = "中くらい";
Blockly.Msg.SOUND_SET_TEMPO_DROP_FAST= "速い";
Blockly.Msg.SOUND_SET_TEMPO_DROP_VERY_FAST = "とても速い";

Blockly.Msg.SOUND_PLAY_IN_BACKGROUND = "バックグラウンドで音を鳴らす";


// Category labels
Blockly.Msg.CATEGORY_MOTION = 'Motion';

Blockly.Msg.CATEGORY_LOOKS = 'Looks';
Blockly.Msg.CATEGORY_SOUND = '音'; //
Blockly.Msg.CATEGORY_EVENTS = 'イベント'; //
Blockly.Msg.CATEGORY_CONTROL = '制御'; //
Blockly.Msg.CATEGORY_SENSING = '調べる'; //
Blockly.Msg.CATEGORY_OPERATORS = '演算'; //
Blockly.Msg.CATEGORY_VARIABLES = '変数'; //
Blockly.Msg.CATEGORY_MYBLOCKS = 'ブロック定義'; //

Blockly.Msg.CATEGORY_DRIVE = '動き'; //
Blockly.Msg.CATEGORY_COMMENT = 'コメント'; //
Blockly.Msg.CATEGORY_LED = '光'; //
Blockly.Msg.CATEGORY_ADVANCED = '高度な機能'; //

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
Blockly.Msg.NEW_PROCEDURE = 'ブロックを作る';
Blockly.Msg.MANAGE_PROCEDURE = 'ブロックを管理する';
Blockly.Msg.PROCEDURE_ALREADY_EXISTS = 'A procedure named "%1" already exists.';
Blockly.Msg.PROCEDURE_DEFAULT_NAME = 'block name';
Blockly.Msg.PROCEDURE_USED = 'To delete a block definition, first remove all uses of the block';



//Drive block Messages

Blockly.Msg.DRIVE_FORWARDS_DISTANCE = "前に進む";
Blockly.Msg.DRIVE_BACKWARDS_DISTANCE = "後ろに戻る";
Blockly.Msg.DRIVE_LEFT_DISTANCE = "左に";
Blockly.Msg.DRIVE_RIGHT_DISTANCE = "右に";
Blockly.Msg.DRIVE_DISTANCE_DROPDOWN_CM = "cm";
Blockly.Msg.DRIVE_DISTANCE_DROPDOWN_INCH = "inch";
Blockly.Msg.DRIVE_DISTANCE_DROPDOWN_SECONDS = "秒";
Blockly.Msg.DRIVE_DISTANCE_DROPDOWN_DEGREES = "度";
Blockly.Msg.DRIVE_TURN_DROPDOWN_SPIN = "回転する";
Blockly.Msg.DRIVE_TURN_DROPDOWN_FORWARDS = "進む";
Blockly.Msg.DRIVE_TURN_DROPDOWN_BACKWARDS = "戻る";
Blockly.Msg.DRIVE_FORWARDS_UNTIL = "まで前に進む";
Blockly.Msg.DRIVE_BACKWARDS_UNTIL = "まで後ろに戻る";
Blockly.Msg.DRIVE_LEFT_UNTIL = "まで左に";
Blockly.Msg.DRIVE_RIGHT_UNTIL = "まで右に";
Blockly.Msg.DRIVE_SET = "設定にする";
Blockly.Msg.DRIVE_SET_LEFT_MOTOR = "で左モーターを";
Blockly.Msg.DRIVE_SET_RIGHT_MOTOR = "で右モーターを";
Blockly.Msg.DRIVE_SET_MOTOR_DROPDOWN_FORWARDS = "前に進む";
Blockly.Msg.DRIVE_SET_MOTOR_DROPDOWN_BACKWARDS = "後に戻る";
Blockly.Msg.DRIVE_SET_BOTH_MOTOR = "で両方のモーターを";
Blockly.Msg.DRIVE_SET_BOTH_MOTOR_DROPDOWN_FORWARDS = "前に進む";
Blockly.Msg.DRIVE_SET_BOTH_MOTOR_DROPDOWN_BACKWARDS = "後に戻る";
Blockly.Msg.DRIVE_SET_BOTH_MOTOR_DROPDOWN_SPIN_LEFT = "左に回転する";
Blockly.Msg.DRIVE_SET_BOTH_MOTOR_DROPDOWN_SPIN_RIGHT = "右に回転する";
Blockly.Msg.DRIVE_SET_BOTH_MOTOR_DROPDOWN_TURN_LEFT = "左に進む";
Blockly.Msg.DRIVE_SET_BOTH_MOTOR_DROPDOWN_TURN_RIGHT = "右に進む";
Blockly.Msg.DRIVE_SPEED = "速さ";
Blockly.Msg.DRIVE_AT = "で";
Blockly.Msg.DRIVE_STOP = "を停止する";
Blockly.Msg.DRIVE_STOP_DROPDOWN_BOTH = "両方のモーター";
Blockly.Msg.DRIVE_STOP_DROPDOWN_LEFT = "左モーター";
Blockly.Msg.DRIVE_STOP_DROPDOWN_RIGHT = "右モーター";


//LED Block Messages
Blockly.Msg.LED_LEFT = "左のLEDを";
Blockly.Msg.LED_RIGHT = "右のLEDを";
Blockly.Msg.LED_DROPDOWN_ON = "ON";
Blockly.Msg.LED_DROPDOWN_OFF = "OFF";
Blockly.Msg.LED_SET = "にする";
Blockly.Msg.LED_MESSAGE = "赤外線メッセージ";
Blockly.Msg.LED_SEND = "を送信する";



//Demo messages
Blockly.Msg.DEMO_TEST_PROGRAM = "Test program";
Blockly.Msg.DEMO_TEST_PROGRAM_DISC = "Tests drive, LEDs and speaker";
Blockly.Msg.DEMO_MOVE_WITH_MUSIC = "Move with music";
Blockly.Msg.DEMO_MOVE_WITH_MUSIC_DISC = "Drive while playing music";
Blockly.Msg.DEMO_FOLLOW_A_LINE = "Follow a line";
Blockly.Msg.DEMO_FOLLOW_A_LINE_DISC = "Use the line sensor to follow a black line";
Blockly.Msg.DEMO_BOUNCE_IN_BORDERS = "Bounce in borders";
Blockly.Msg.DEMO_BOUNCE_IN_BORDERS_DISC = "Use the line sensor to stay inside a black line border";
Blockly.Msg.DEMO_WARNINGS = "Warning messages demo";
Blockly.Msg.DEMO_WARNINGS_DISC = "Demonstrates red error messages and yellow warning messages";
Blockly.Msg.DEMO_CLAP_CONTROL = "Clap controlled driving";
Blockly.Msg.DEMO_CLAP_CONTROL_DISC = "Clap once to turn, clap twice to drive forwards";
Blockly.Msg.DEMO_AVOID_OBSTACLES = "Avoid obstacles";
Blockly.Msg.DEMO_AVOID_OBSTACLES_DISC = "Use the obstacle sensor to avoid driving into obstacles";
Blockly.Msg.DEMO_FOLLOW_TORCH = "Follow a torch";
Blockly.Msg.DEMO_FOLLOW_TORCH_DISC = "Use the light sensors to follow a flash light";
Blockly.Msg.DEMO_FOLLOW_A_LINE_IF = "Follow a line using if statements";
Blockly.Msg.DEMO_FOLLOW_A_LINE_IF_DISC = "A different way to use the line sensor to follow a line using an ‘if’ block";


Blockly.Msg.MENU_DROP_MENU = "メニュー"; //navMenuTop
Blockly.Msg.MENU_DROP_NEW = "新規"; //navNew
Blockly.Msg.MENU_DROP_LOAD_DEMO = "デモを読み込む"; //navPopLoadDemo
Blockly.Msg.MENU_DROP_LOAD_LOCAL = "コンピューターから読み込む"; //navPopLoadLocal
Blockly.Msg.MENU_DROP_SAVE_LOCAL = "コンピューターに保存する"; //navPopLoadSave
Blockly.Msg.MENU_DROP_UPDATE_FIRMWARE = "ファームウェアを更新する"; //navPopFirmwareUpdate
Blockly.Msg.MENU_DROP_DIAGNOSTICS = "診断する"; //navPopHelp
Blockly.Msg.MENU_DROP_ABOUT = "EdScratchについて"; //navPopAbout
Blockly.Msg.MENU_DROP_TERMS = "利用規約"; //navPopTerms


Blockly.Msg.MENU_USB = "USB"; //navPopUSB
Blockly.Msg.MENU_SAVE = " 保存"; //navPopLoadSaveAlt

Blockly.Msg.MENU_VERSION_MAIN = " Edison V3"; //navVersionTop
Blockly.Msg.MENU_VERSION_SWITCH = "Edison V1/V2に切り替える"; //navVersionSwitch
Blockly.Msg.MENU_VERSION_WHICH_VERSION = "自分のEdisonのバージョンを確認する"; //navVersionHelp
Blockly.Msg.MENU_PROGRAM = " プログラムを書き込む"; //navProgram
Blockly.Msg.MENU_PROGRAM_FLASH = " プログラムを書き込む"; //navProgramFlash


Blockly.Msg.MODAL_CREATE_VAR = "新しい変数"; //divCreateVarsTitle
Blockly.Msg.MODAL_CREATE_VAR_NAME = "新しい変数名"; //divCreateVarslabel
Blockly.Msg.MODAL_CREATE_VAR_BUTTON = "OK"; //btnCreateVar
Blockly.Msg.MODAL_CREATE_VAR_EXIT = "キャンセル"; //btnCreateVarDone
Blockly.Msg.MODAL_CREATE_VAR_SUCCESS = "新しい変数を作成しました。"; //in file 1511 and 1488 but here for sure

Blockly.Msg.MODAL_MANAGE_VAR = "変数"; //divManageVarslabel
Blockly.Msg.MODAL_MANAGE_VAR_NAME = "変数名"; //divManageVarsName
Blockly.Msg.MODAL_MANAGE_VAR_ACTION = "操作"; //divManageVarsAction
Blockly.Msg.MODAL_MANAGE_VAR_BUTTON_DELETE = "削除"; //in code workspace setup 655
Blockly.Msg.MODAL_MANAGE_VAR_BUTTON_RENAME = "名前を変更"; //in code workspace setup 656
Blockly.Msg.MODAL_MANAGE_VAR_BUTTON_CONFIRM = "OK"; // in code 1378
Blockly.Msg.MODAL_MANAGE_VAR_BUTTON_CANCEL = "キャンセル"; // in code 1378
Blockly.Msg.MODAL_MANAGE_VAR_CONFIRM_NOT_CHANGED = "変数名が変更されていません。"; //in code 1401
Blockly.Msg.MODAL_MANAGE_VAR_CONFIRM_SUCCESS = "変数名を変更しました。"; //in code 1423

Blockly.Msg.MODAL_MANAGE_VAR_NAME_NONE = "変数名を入力してください。"; //in code 1554
Blockly.Msg.MODAL_MANAGE_VAR_NAME_IN_USE = "この変数名はすでに存在します。"; //in code 1558
Blockly.Msg.MODAL_MANAGE_VAR_NAME_UNSUPPORTED = "変数名に使用できない文字が含まれています。変数名には英数字（a-z,A-Z,0-9）とアンダースコア（ _ ）のみ使用できます。"; //line 1563
Blockly.Msg.MODAL_MANAGE_VAR_NAME_NUMBER_START = "変数名の最初の文字に数字を使用することはできません。変数名の最初の文字には英字（a-z,A-Z）とアンダースコア（ _ ）のみ使用できます。"; //in code 1567

Blockly.Msg.MODAL_MANAGE_VAR_DELETE_IN_USE = "この変数名はすでに存在します。"; //in code 11619
Blockly.Msg.MODAL_MANAGE_VAR_DELETE_CONFIRM = "Yes"; //in code line 1619
Blockly.Msg.MODAL_MANAGE_VAR_DELETE_DECLINE = "No"; //in code line 1619

Blockly.Msg.MODAL_CREATE_FUNCT = "新しいブロック"; //divCreateFunctTitle
Blockly.Msg.MODAL_CREATE_FUNCT_NAME = "ブロック名"; //divCreateFunctLabel
Blockly.Msg.MODAL_CREATE_FUNCT_WARNING = "Alphanumeric characters only and must begin with a letter."; //divCreateFunctWarning
Blockly.Msg.MODAL_CREATE_FUNCT_BUTTON = "OK"; //btnCreateFunc
Blockly.Msg.MODAL_CREATE_FUNCT_BUTTON_EXIT = "キャンセル"; //btnCreateFuncDone
Blockly.Msg.MODAL_CREATE_FUNCT_SUCCESS = "新しいブロックを作成しました。";

Blockly.Msg.MODAL_MANAGE_FUNCT = "ブロック"; //divManageFunctlabel
Blockly.Msg.MODAL_MANAGE_FUNCT_NAME = "ブロック名"; //divManageFunctName
Blockly.Msg.MODAL_MANAGE_FUNCT_ACTION = "操作"; //divManageFunctAction
Blockly.Msg.MODAL_MANAGE_FUNCT_BUTTON_DELETE = "削除"; //in code workspace setup 655
Blockly.Msg.MODAL_MANAGE_FUNCT_BUTTON_RENAME = "名前を変更"; //in code workspace setup 656
Blockly.Msg.MODAL_MANAGE_FUNCT_BUTTON_CONFIRM = "OK"; // in code 1378
Blockly.Msg.MODAL_MANAGE_FUNCT_BUTTON_CANCEL = "キャンセル"; // in code 1378
Blockly.Msg.MODAL_MANAGE_FUNCT_CONFIRM_NOT_CHANGED = "ブロック名が変更されていません。"; //in code 1401
Blockly.Msg.MODAL_MANAGE_FUNCT_CONFIRM_SUCCESS = "ブロック名を変更しました。"; //in code 1423

Blockly.Msg.MODAL_MANAGE_FUNCT_NAME_NONE = "ブロック名を入力してください。"; //in code
Blockly.Msg.MODAL_MANAGE_FUNCT_NAME_IN_USE = "このブロック名はすでに存在します。"; //in code
Blockly.Msg.MODAL_MANAGE_FUNCT_NAME_START_WITH = "User function names cannot start with";
Blockly.Msg.MODAL_MANAGE_FUNCT_NAME_UNSUPPORTED = "ブロック名に使用できない文字が含まれています。ブロック名には英数字（a-z,A-Z,0-9）とアンダースコア（ _ ）のみ使用できます。"; //line
Blockly.Msg.MODAL_MANAGE_FUNCT_NAME_NUMBER_START = "ブロック名の最初の文字に数字を使用することはできません。ブロック名の最初の文字には英字（a-z,A-Z）とアンダースコア（ _ ）のみ使用できます。"; //in code 1567

Blockly.Msg.MODAL_MANAGE_FUNCT_DELETE_IN_USE = "このブロック名はすでに存在します。"; //in code 11619
Blockly.Msg.MODAL_MANAGE_FUNCT_DELETE_CONFIRM = "Yes"; //in code line 1619
Blockly.Msg.MODAL_MANAGE_FUNCT_DELETE_DECLINE = "No"; //in code line 1619

Blockly.Msg.MODAL_SAVE_TITLE = "コンピューターに保存する"; //no ID yet
Blockly.Msg.MODAL_SAVE_PROG_TITLE = "プログラム名"; //no ID yet
Blockly.Msg.MODAL_SAVE_BUTTON = "保存する"; //no ID yet
Blockly.Msg.MODAL_SAVE_ERROR_NO_NAME = "Please enter a name for your program. You need to name the program in order to save it."; //1050 in function, replace
Blockly.Msg.MODAL_SAVE_ERROR_LONG_NAME = "Whoops. There's a problem with that program name. Program names can be a maximum of 255 characters long."; //1052 in function, replace
Blockly.Msg.MODAL_SAVE_SAVING = "プログラムを保存しています。まもなくプログラムのダウンロードが開始します。"; //268 in function, replace

Blockly.Msg.MODAL_LOAD_PC_TITLE = "コンピューターから読み込む"; //no ID yet
Blockly.Msg.MODAL_LOAD_PC_FILE_ERROR_1 = "EdScratchファイルを選択してください。"; //no ID yet
Blockly.Msg.MODAL_LOAD_PC_FILE_ERROR_2 = "EdScratchファイルの拡張子："; //no ID yet
Blockly.Msg.MODAL_LOAD_PC_FILE_ERROR_3 = ".edscratch"; //no ID yet
Blockly.Msg.MODAL_LOAD_PC_FILE_BUTTON = "選択する..."; //no ID yet
Blockly.Msg.MODAL_LOAD_PC_BUTTON = "読み込む"; //btnLoadLocal
Blockly.Msg.MODAL_LOAD_PC_NO_FILE_ERROR_1 = "EdScratchファイルが選択されていません。コンピューターに保存されたEdScratchファイルを選択し、「読み込む」をクリックしてください。"; //IN FILE 398
Blockly.Msg.MODAL_LOAD_PC_FILE_DATA_ERROR_1 = "Uh-oh. There's a problem with the data in that file."; //IN FILE 417
Blockly.Msg.MODAL_LOAD_PC_FILE_DATA_ERROR_2 = "Please upload a different EdScratch save file. [All EdScratch save files are file type (.edscratch).]"; //IN FILE 417
Blockly.Msg.MODAL_LOAD_PC_FILE_TYPE_ERROR_1 = "Uh-oh. You've uploaded an incorrect file type."; //IN FILE 417
Blockly.Msg.MODAL_LOAD_PC_FILE_TYPE_ERROR_2 = "Please upload an EdScratch save file. [All EdScratch save files are file type (.edscratch).]"; //IN FILE 417
Blockly.Msg.MODAL_LOAD_PC_FILE_READY = "プログラムを読み込む準備が整いました:";


Blockly.Msg.MODAL_LOAD_DEMO_TITLE = "デモを読み込む"; //no ID yet
Blockly.Msg.MODAL_LOAD_DEMO_BUTTON = "読み込む"; //471 IN FILE


Blockly.Msg.MODAL_ABOUT_TITLE = "EdScratchについて"; //divAboutLabel
Blockly.Msg.MODAL_ABOUT_COPYRIGHT = "Copyright 2023 Microbric Pty Ltd"; //divAboutCopyright
Blockly.Msg.MODAL_ABOUT_BODY_1 = "The EdScratch app was developed using the Scratch Blocks code base developed by MIT. Scratch Blocks was built on the Blockly code base developed by Google."//divAboutMIT
Blockly.Msg.MODAL_ABOUT_BODY_2 = "Contributions and credits:"; // divAboutCredits
Blockly.Msg.MODAL_ABOUT_BODY_3 = "EdScratch programming language and block compiler developed by Ben Hayton, Microbric"// divAboutCreditsBen
Blockly.Msg.MODAL_ABOUT_BODY_4 = "EdScratch user interface developed by Sean Killian, Killian Web Development"// divAboutCreditsSean
Blockly.Msg.MODAL_ABOUT_BODY_5 = "Edison V3 firmware developed by Damien George, George Robotics (MicroPython code base)"// divAboutCreditsDamien


Blockly.Msg.MODAL_DIAGNOSTICS = "診断する"; //divDiagnosticsLabel
Blockly.Msg.MODAL_DIAGNOSTICS_CONNECT_ISSUES_TITLE = "Connectivity issues"; //divDiagnosticsConnectLabel
Blockly.Msg.MODAL_DIAGNOSTICS_CONNECT_ISSUES_BODY = "To ensure that your program can be compiled and sent to the Edison robot, it is a good idea to check your connection with the EdScratch compiler."; //divDiagnosticsConnectBody
Blockly.Msg.MODAL_DIAGNOSTICS_CONNECT_ISSUES_BUTTON = "Run the connection checker"; //navPopHelpConnection
Blockly.Msg.MODAL_DIAGNOSTICS_FIRMWARE_TITLE = "Firmware"; //divDiagnosticsFirmwareLabel
Blockly.Msg.MODAL_DIAGNOSTICS_FIRMWARE_BODY = "The firmware version in your Edison can be useful to know when talking to our tech support team. Check that here:"; //divDiagnosticsFirmwareBody
Blockly.Msg.MODAL_DIAGNOSTICS_FIRMWARE_BUTTON = "Get firmware version"; //navPopHelpGetStatus
Blockly.Msg.MODAL_DIAGNOSTICS_PROGRAMMING_TITLE = "Programming method"; //divDiagnosticsProgLabel
Blockly.Msg.MODAL_DIAGNOSTICS_PROGRAMMING_BODY = "This option enables you to swtich between USB and screen flash programming on this device."; //divDiagnosticsProgBody
Blockly.Msg.MODAL_DIAGNOSTICS_PROGRAMMING_BUTTON = "Change programming method"; //navPopProgrammingMethod
Blockly.Msg.MODAL_DIAGNOSTICS_IR_TITLE = "Clear learned IR remote commands"; //divDiagnosticsIRLabel
Blockly.Msg.MODAL_DIAGNOSTICS_IR_BODY = "This option allows you to clear all learned IR remote control commands from an Edison V3 robot."; //divDiagnosticsIRBody
Blockly.Msg.MODAL_DIAGNOSTICS_IR_BUTTON = "Clear remote codes"; //doClearRemoteCodes
Blockly.Msg.MODAL_DIAGNOSTICS_IR_SUCCESS = "Remote codes have been cleared."; // in file 347
Blockly.Msg.MODAL_DIAGNOSTICS_IR_ERROR = "An error has occurred."; // in file 349

Blockly.Msg.MODAL_CONNECTION = "Connection"; //no ID yet
Blockly.Msg.MODAL_CONNECTION_TEST_1 = "If the test above has the result "; //no ID yet
Blockly.Msg.MODAL_CONNECTION_TEST_EXAMPLE = "NO SERVER FOUND"; //no ID yet
Blockly.Msg.MODAL_CONNECTION_TEST_2 = " then a firewall may be blocking access to the compiler."; //no ID yet
Blockly.Msg.MODAL_CONNECTION_TEST_3 = "To rectify this, ask your network administrator to whitelist these addresses:"; //no ID yet
Blockly.Msg.MODAL_CONNECTION_PORTS = "The network administrator also needs to unblock ports 80, 8080, 443 and 8443."; //no ID yet
Blockly.Msg.MODAL_CONNECTION_BACK = "Back to diagnostics"; //no ID yet
Blockly.Msg.MODAL_CONNECTION_SERVER = "Server: "; //in code
Blockly.Msg.MODAL_CONNECTION_SERVER_SEARCHING = "searching";
Blockly.Msg.MODAL_CONNECTION_SERVER_NONE = "NO SERVER FOUND"; //in code
Blockly.Msg.MODAL_CONNECTION_COMIPLE_TEST = "Compile Test: "; //in code
Blockly.Msg.MODAL_CONNECTION_COMIPLE_TEST_WORKING = "working";
Blockly.Msg.MODAL_CONNECTION_COMIPLE_TEST_ERROR = "compile error"; //in code
Blockly.Msg.MODAL_CONNECTION_COMIPLE_TEST_COMPLETE = "compile complete in "; //in code




Blockly.Msg.MODAL_STATUS_TITLE = "Firmware version"; //divFirmwareStatusLabel
Blockly.Msg.MODAL_STATUS_BUTTON = "Connect Edison"; //btnStatusHubConnect
Blockly.Msg.MODAL_STATUS_STATUS_LABEL= "Status:"; //divFirmwareStatusOutputStatus
Blockly.Msg.MODAL_STATUS_STATUS_NOT_CONNECTED= "not connected"; // 688
Blockly.Msg.MODAL_STATUS_STATUS_CONNECTED= "connected"; // 665 647
Blockly.Msg.MODAL_STATUS_FIRMWARE_LABEL= "Firmware version:"; //divFirmwareStatusOutputFirmware
Blockly.Msg.MODAL_STATUS_FIRMWARE_BOOT_MODE= "bootloader mode";//698
Blockly.Msg.MODAL_STATUS_FIRMWARE_FACTORY_MODE= "factory application mode";//700
Blockly.Msg.MODAL_STATUS_FIRMWARE_USER_MODE= "user application mode"//702;
Blockly.Msg.MODAL_STATUS_FIRMWARE_TAG= "firmware";//708
Blockly.Msg.MODAL_STATUS_BOOT_TAG= "boot";//708
Blockly.Msg.MODAL_STATUS_FIRMWARE_UPDATE = "A firmware update";
Blockly.Msg.MODAL_STATUS_FIRMWARE_UPDATE_AVAILABLE = "is available"; //
Blockly.Msg.MODAL_STATUS_BOOT_UPDATE = "A boot update";
Blockly.Msg.MODAL_STATUS_FIRMWARE_UPDATE_BUTTON = "Update Firmware";
Blockly.Msg.MODAL_STATUS_FIRMWARE_UP_TO_DATE = "Your Edison is up to date.";
Blockly.Msg.MODAL_PROGRAMING_METHOD_TITLE = "Programming method"; //divProgMethodLabel
Blockly.Msg.MODAL_PROGRAMING_METHOD_BODY = "Screen flash programming has been developed for Apple iPads. This is because Apple do not allow normal access to the iPad's data port. Therefore, screen flash programming is only fully supported for iPads. However, the screen flasher does work with some Android devices. The option below enables screen flash programming on this device. If this device is not an iPad then it is not guaranteed to work.";//divProgMethodBody
//need the text for displaying current method
Blockly.Msg.MODAL_PROGRAMING_METHOD_CURRENT_LABEL = "Currently using"; //code
Blockly.Msg.MODAL_PROGRAMING_METHOD_CURRENT_LABEL_USB = "USB"; //code
Blockly.Msg.MODAL_PROGRAMING_METHOD_CURRENT_LABEL_FLASH = "FLASH"; //code
Blockly.Msg.MODAL_PROGRAMING_METHOD_CURRENT_LABEL_METHOD = "method."; //code
Blockly.Msg.MODAL_PROGRAMING_METHOD_BUTTON_USB = "Set to USB method"; //btnChangeUSBMethod
Blockly.Msg.MODAL_PROGRAMING_METHOD_BUTTON_FLASH = "Set to FLASH method"; //btnChangeFlashMethod
Blockly.Msg.MODAL_PROGRAMING_METHOD_ACCORD_BUTTON_FLASH_GUARANTEE = "Why is screen flashing not guaranteed to work with Android devices?"; //btnProgMethodFlashGuarantee
Blockly.Msg.MODAL_PROGRAMING_METHOD_ACCORD_BODY_FLASH_GUARANTEE = "Android devices are made by many different manufacturers and there are thousands of different models. This means there is also a lot of different screen technologies. It is not possible to test and customise screen flashing for all Android devices."; //divProgMethodFlashGuarantee
Blockly.Msg.MODAL_PROGRAMING_METHOD_ACCORD_BUTTON_FLASH_SETTINGS = "Are there settings that might help my Android device work with screen flashing?"; //btnProgMethodFlashSettings
Blockly.Msg.MODAL_PROGRAMING_METHOD_ACCORD_BODY_FLASH_SETTINGS = "Yes, on the screen flash popup window there is a 'reliable/fast' setting that has four positions. Try each one of the four positions. Also, try adjusting the screen brightness. Test with 50%, 75%, 90% and 100% brightness."; //divProgMethodFlashSettings
Blockly.Msg.MODAL_PROGRAMING_METHOD_ACCORD_BUTTON_FLASH_FAIL = "What do I do if screen flashing does not work on my Android device?"; //btnProgMethodFlashFail
Blockly.Msg.MODAL_PROGRAMING_METHOD_ACCORD_BODY_FLASH_FAIL = "To program you will need to plug the Edison V3 cable into the Android device's data port via an adaptor cable. These are common and cheaply available from ebay, Amazon etc."; //divProgMethodFlashFail
Blockly.Msg.MODAL_PROGRAMING_METHOD_BACK = "Back to diagnostics"; //divProgMethodBack


Blockly.Msg.MODAL_PROGRAMING = "Program"; //divProgrammingLabel
//NEED MESSAGES
Blockly.Msg.MODAL_PROGRAMING_ERROR_NO_BLOCK = "Cannot download with no blocks connected to the start block.";//code
Blockly.Msg.MODAL_PROGRAMING_ERROR_RED = "Cannot download with Red Errors.";
Blockly.Msg.MODAL_PROGRAMING_UPDATE_FIRMWARE = "To program your Edison you will need to update the firmware to the latest version"; //code
Blockly.Msg.MODAL_PROGRAMING_UPDATE_FIRMWARE_BUTTON = "Update firmware";
Blockly.Msg.MODAL_PROGRAMING_UPDATE_FIRMWARE_NOW = "Firmware updated required. Updating now...";
Blockly.Msg.MODAL_PROGRAMING_FIRMWARE_UPDATED = "Firmware updated.";
Blockly.Msg.MODAL_PROGRAMING_FIRMWARE_UPDATE_INCOMPLETE = "Incomplete firmware update.";
Blockly.Msg.MODAL_PROGRAMING_DONE = "OK! The program has loaded to your Edison.";
Blockly.Msg.MODAL_PROGRAMING_ERROR_JSON = "Response is not JSON!";
Blockly.Msg.MODAL_PROGRAMING_ERROR_UNKNOWN = "Unknown Error!";

Blockly.Msg.MODAL_FIRMWARE_UPDATE_TITLE = "ファームウェアを更新する"; //divFirmwareUpdateLabel
Blockly.Msg.MODAL_FIRMWARE_UPDATE_LATEST = "最新のEdisonファームウェアバージョン: "; //divFirmwareLatestVersion
Blockly.Msg.MODAL_FIRMWARE_UPDATE_POPUP = "この画面でEdisonのファームウェアを更新します。"; //divFirmwareUseThis
Blockly.Msg.MODAL_FIRMWARE_UPDATE_TO_UPDATE1 = "Edisonファームウェアの更新方法:"; //divFirmwareToUpdate
Blockly.Msg.MODAL_FIRMWARE_UPDATE_TO_UPDATE2 = "Edisonを接続し、「ファームウェア更新」をクリックします。"; //divFirmwareFollowPrompts
Blockly.Msg.MODAL_FIRMWARE_UPDATE_TO_UPDATE_BUTTON = "ファームウェア更新"; //btnFUHubConnect
Blockly.Msg.MODAL_FIRMWARE_UPDATE_TO_RECONNECT_BUTTON = "Reconnect Edison "; //btnFUHubReconnect
Blockly.Msg.MODAL_FIRMWARE_UPDATE_FEEDBACK_START = "Ready..."; //811 IN FILE
//need text from the update process
Blockly.Msg.MODAL_FIRMWARE_UPDATE_TWO_STEP_START = "A two step firmware update is starting";
Blockly.Msg.MODAL_FIRMWARE_UPDATE_BOOT_COMPLETE = "Bootloader update complete.";
Blockly.Msg.MODAL_FIRMWARE_UPDATE_PLEASE_CLICK = "Please click";
Blockly.Msg.MODAL_FIRMWARE_UPDATE_ISSUE_LOADING = "Issue loading firmware";
Blockly.Msg.MODAL_FIRMWARE_UPDATE_ONE_STEP_START = "A firmware update is starting";
Blockly.Msg.MODAL_FIRMWARE_UPDATE_ERROR_ISSUE_LOADING = "Error: Issue loading firmware.";
Blockly.Msg.MODAL_FIRMWARE_UPDATE_ERROR_ISSUE_DOWNLOADING = "Error: Issue downloading firmware.";
Blockly.Msg.MODAL_FIRMWARE_UPDATE_FIRM_COMPLETE = "Firmware update complete.";
Blockly.Msg.MODAL_FIRMWARE_UPDATE_NONE_NEEDED = "No update required: the firmware on your Edison is up to date.";


Blockly.Msg.MODAL_USB_CONTROL = "USB制御"; //no ID yet
Blockly.Msg.MODAL_USB_RUN_BUTTON = "接続する"; //usbRun
Blockly.Msg.MODAL_USB_CONNECTED_STATUS = "接続済み"; //IN FILE 583
Blockly.Msg.MODAL_USB_DISCONNECTED_STATUS = "未接続"; //IN FILE 590 AND 601
Blockly.Msg.MODAL_USB_RUNNING_STATUS = "接続中"; //IN FILE 595
Blockly.Msg.MODAL_USB_DATA_TO = "データ送信"; //no ID yet
Blockly.Msg.MODAL_USB_DATA_TO_BUTTON = "送信する"; //usbSend
Blockly.Msg.MODAL_USB_DATA_FROM = "データ受信"; //no ID yet
Blockly.Msg.MODAL_USB_DATA_FROM_CLEAR = "クリアする"; //usbClear
Blockly.Msg.MODAL_USB_DATA_FROM_COPY = "クリップボードにコピーする"; //usbExport AND 614 IN CODE
Blockly.Msg.MODAL_USB_DATA_FROM_COPIED = "Copied!"; //612 IN CODE


Blockly.Msg.MODAL_BAD_BROWSER_TITLE = "Unsupported browser"; //divBrowserLabel
Blockly.Msg.MODAL_BAD_BROWSER_USING = "You appear to be using: "; //divBrowserAppearUsing
Blockly.Msg.MODAL_BAD_BROWSER_WEB_USB = "The Edison V3 is programmed directly from your web browser via USB. This requires that your web browser supports USB connections.";
//divBrowserNeedUSB
Blockly.Msg.MODAL_BAD_BROWSER_UNFORTUNATLY = "Unfortunately"; //divBrowserUnfortunately
Blockly.Msg.MODAL_BAD_BROWSER_UNSUPORTED = "does not currently support USB connections, so cannot program your Edison V3 robot.";
//divBrowserNotSupported
Blockly.Msg.MODAL_BAD_BROWSER_USE_CHROME = "We recommend using Google Chrome."; //divBrowserRecommendChrome
Blockly.Msg.MODAL_BAD_BROWSER_GET_CHROME = "Get Chrome."; //divBrowserChrome

Blockly.Msg.MODAL_LOADING = "読み込み中..."; //divLoadingLabel

Blockly.Msg.MODAL_FLASHER_TITLE = "Flasher"; //no ID yet
Blockly.Msg.MODAL_FLASHER_STEP_1 = "Edisonをイラストに重ねます。"; //no ID yet
Blockly.Msg.MODAL_FLASHER_STEP_2 = "Edisonの●丸ボタンを押します。"; //no ID yet
Blockly.Msg.MODAL_FLASHER_STEP_3 = "「書き込む」をクリックします。"; //no ID yet
Blockly.Msg.MODAL_FLASHER_RELIABLE = "低速"; //no ID yet
Blockly.Msg.MODAL_FLASHER_FAST = "高速"; //no ID yet
Blockly.Msg.MODAL_FLASHER_ADJUST_SPEED = "書き込みに時間がかかる場合は、速度を調節してください。速度が遅い方が、書き込みの信頼性が高いです。"; //no ID yet
Blockly.Msg.MODAL_FLASHER_DOWNLOAD = "書き込む"; //no ID yet
Blockly.Msg.MODAL_FLASHER_CANCEL = "キャンセル"; //no ID yet
Blockly.Msg.MODAL_FLASHER_TIPS_HEADING = "ヒント"; //no ID yet
Blockly.Msg.MODAL_FLASHER_TIPS_BODY_1 = "スクリーンの明るさを80%から90%の間に調節してください。"; //divFlasherTipsBody1
Blockly.Msg.MODAL_FLASHER_TIPS_BODY_2 = "太陽光や明るい照明を避けてください。"; //divFlasherTipsBody2
Blockly.Msg.MODAL_FLASHER_TIPS_BODY_3 = "Edisonのファームウェアを最新のものに更新してください。"; //divFlasherTipsBody3
Blockly.Msg.MODAL_FLASHER_DOWNLOADING = "書き込み中...";
Blockly.Msg.MODAL_FLASHER_COMPLETE = "書き込み完了";
Blockly.Msg.MODAL_FLASHER_BYTES = "bytes in";
Blockly.Msg.MODAL_FLASHER_SECONDS = "seconds";

Blockly.Msg.ERROR_RED_OBS_SETTING = "障害物検出は、「調べる」カテゴリの「障害物検出をONにする」ブロックが実行されるまでは動作しません。";
Blockly.Msg.ERROR_RED_OBS_SETTING_EVENT = "障害物検出は、「調べる」カテゴリの「障害物検出をONにする」ブロックが実行されるまでは動作しません。";
Blockly.Msg.ERROR_RED_LINE_SETTING = "ライン検出は、「調べる」カテゴリの「ライン検出をONにする」ブロックが実行されるまでは動作しません。";
Blockly.Msg.ERROR_RED_LINE_SETTING_EVENT = "ライン検出は、「調べる」カテゴリの「ライン検出をONにする」ブロックが実行されるまでは動作しません。";
Blockly.Msg.ERROR_RED_DRIVE_CLAP = "拍手検出は、モーターが動いている間はモーターのノイズが大きいため動作しません。";
Blockly.Msg.ERROR_RED_EMPTY_IN_FORWARDS = "「〜まで前に進む」ブロックは条件文（〜）が必要です。";
Blockly.Msg.ERROR_RED_EMPTY_IN_BACKWARDS = "「〜まで後ろに戻る」ブロックは条件文（〜）が必要です。";
Blockly.Msg.ERROR_RED_EMPTY_IN_LEFT = "「〜まで左に」ブロックは条件文（〜）が必要です。";
Blockly.Msg.ERROR_RED_EMPTY_IN_RIGHT = "「〜まで右に」ブロックは条件文（〜）が必要です。";
Blockly.Msg.ERROR_RED_EMPTY_IN_SET_VAR = "「〜を〜にする」ブロックは変数が必要です。";
Blockly.Msg.ERROR_RED_EMPTY_IN_INC_VAR = "「〜を1ずつ変える」ブロックは変数が必要です。";
Blockly.Msg.ERROR_RED_EMPTY_IN_DEC_VAR = "「〜を-1ずつ変える」ブロックは変数が必要です。";
Blockly.Msg.ERROR_RED_EMPTY_IN_IF = "「もし〜なら」ブロックは条件文（〜）が必要です。";
Blockly.Msg.ERROR_RED_EMPTY_IN_IF_ELSE = "「もし〜なら、でなければ」ブロックは条件文（〜）が必要です。";
Blockly.Msg.ERROR_RED_EMPTY_IN_WAIT = "「〜まで待つ」ブロックは条件文（〜）が必要です。";
Blockly.Msg.ERROR_RED_EMPTY_IN_WAIT_MILLI = "「〜ミリ秒待つ」ブロックは入力値が必要です。";
Blockly.Msg.ERROR_RED_EMPTY_IN_REP = "「〜まで繰り返す」ブロックは条件文（〜）が必要です。";
Blockly.Msg.ERROR_RED_EMPTY_IN_BS_RIGHT = "「〜を右に〜ビットシフトする」ブロックは変数が必要です。";
Blockly.Msg.ERROR_RED_EMPTY_IN_BS_LEFT = "「〜を左に〜ビットシフトする」ブロックは変数が必要です。";
Blockly.Msg.ERROR_RED_EMPTY_IN_OPERATOR_NOT = "「〜ではない」ブロックは条件文（〜）が必要です。";
Blockly.Msg.ERROR_RED_EMPTY_IN_OPERATOR_AND = "「〜かつ〜」ブロックは条件文（〜）が必要です。";
Blockly.Msg.ERROR_RED_EMPTY_IN_OPERATOR_OR = "「〜または〜」ブロックは条件文（〜）が必要です。";
Blockly.Msg.ERROR_RED_EMPTY_BACKGROUND_MUSIC = "「バックグラウンドで音を鳴らす」ブロックの内部には1つ以上の「〜拍鳴らす」ブロックが必要です。";
Blockly.Msg.ERROR_RED_NO_START = "Programs must have a 'start' event to work correctly. If you are seeing this error message, start a new program by going to the menu and selecting 'new'.";
Blockly.Msg.ERROR_RED_NOT_BACKGROUND_MUSIC = "「バックグラウンドで音を鳴らす」ブロックの内部には「〜拍鳴らす」ブロックのみ接続できます。";
Blockly.Msg.ERROR_RED_NO_MAIN_BLOCKS = "「スタート」ブロックにブロックが接続されていません。";
Blockly.Msg.ERROR_RED_EMPTY_IN_USB_RECEIVED = "「USBから〜にデータを受信する」ブロックは変数が必要です。";
Blockly.Msg.ERROR_RED_DEVIDE_BY_ZERO = "「割り算」ブロックの分母に0を入力することはできません。";
Blockly.Msg.ERROR_RED_FUNCTION_IN_FUNCTION = "ブロック定義の内部にブロック定義を接続することはできません。";


Blockly.Msg.ERROR_YELLOW_RECEIVE_MESSAGE_OBS_ON = "障害物検出がONになっていると赤外線メッセージを受信できません。赤外線メッセージを受信する場合は障害物検出をOFFにしてください。";
Blockly.Msg.ERROR_YELLOW_RECEIVE_REMOTE_OBS_ON = "障害物検出がONになっているとリモコンコードを受信できません。リモコンコードを受信する場合は障害物検出をOFFにしてください。";
Blockly.Msg.ERROR_YELLOW_RECEIVE_MESSAGE_EVENT_OBS_ON = "障害物検出がONになっていると赤外線メッセージを受信できません。赤外線メッセージを受信する場合は障害物検出をOFFにしてください。";
Blockly.Msg.ERROR_YELLOW_RECEIVE_REMOTE_EVENT_OBS_ON = "障害物検出がONになっているとリモコンコードを受信できません。リモコンコードを受信する場合は障害物検出をOFFにしてください。";
Blockly.Msg.ERROR_YELLOW_READ_LIGHT_LINE_OFF = "Consider turning the line detection LED on using the 'line tracking LED' block from the 'Sensing' category if measuring reflectiveness of the driving surface.";
Blockly.Msg.ERROR_YELLOW_OPPERATOR_WAIT_UNTIL = "「〜まで待つ」ブロックの内部の「演算」カテゴリのブロックは、待ち続けたり、全く待たない動作を引き起こす可能性があります。";
Blockly.Msg.ERROR_YELLOW_OPPERATOR_REPEAT_UNTIL = "「〜まで繰り返す」ブロックの内部の「演算」カテゴリのブロックは、繰り返し続けたり、全く繰り返さない動作を引き起こす可能性があります。";
Blockly.Msg.ERROR_YELLOW_OPPERATOR_WAIT = "「〜秒待つ」ブロックの内部の「演算」カテゴリのブロックは、全く待たない動作を引き起こす可能性があります。";
Blockly.Msg.ERROR_YELLOW_OPPERATOR_REPEAT = "「〜回繰り返す」ブロックの内部の「演算」カテゴリのブロックは、全く繰り返さない動作を引き起こす可能性があります。";

Blockly.Msg.ERROR_YELLOW_OPPERATOR_DRIVE_FOR_UNTIL = "「〜まで前に進む」ブロックの内部の「演算」カテゴリのブロックは、動き続けたり、全く動かない動作を引き起こす可能性があります。";
Blockly.Msg.ERROR_YELLOW_OPPERATOR_DRIVE_BACK_UNTIL = "「〜まで後ろに戻る」ブロックの内部の「演算」カテゴリのブロックは、動き続けたり、全く動かない動作を引き起こす可能性があります。";
Blockly.Msg.ERROR_YELLOW_OPPERATOR_DRIVE_LEFT_UNTIL = "「〜まで左に」ブロックの内部の「演算」カテゴリのブロックは、動き続けたり、全く動かない動作を引き起こす可能性があります。";
Blockly.Msg.ERROR_YELLOW_OPPERATOR_DRIVE_RIGHT_UNTIL = "「〜まで右に」ブロックの内部の「演算」カテゴリのブロックは、動き続けたり、全く動かない動作を引き起こす可能性があります。";

Blockly.Msg.ERROR_YELLOW_OPPERATOR_DRIVE_FOR_DIST = "「〜前に進む」ブロックの内部の「演算」カテゴリのブロックは、全く動かない動作を引き起こす可能性があります。";
Blockly.Msg.ERROR_YELLOW_OPPERATOR_DRIVE_BACK_DIST = "「〜後ろに戻る」ブロックの内部の「演算」カテゴリのブロックは、全く動かない動作を引き起こす可能性があります。";
Blockly.Msg.ERROR_YELLOW_OPPERATOR_DRIVE_LEFT_DIST = "「〜左に」ブロックの内部の「演算」カテゴリのブロックは、全く動かない動作を引き起こす可能性があります。";
Blockly.Msg.ERROR_YELLOW_OPPERATOR_DRIVE_RIGHT_DIST = "「〜右に」ブロックの内部の「演算」カテゴリのブロックは、全く動かない動作を引き起こす可能性があります。";

Blockly.Msg.ERROR_YELLOW_DRIVE_LIGHT = "「動き」カテゴリのブロックの内部の「〜で検出された光量」ブロックは、動き続けたり、全く動かない動作を引き起こす可能性があります。";
Blockly.Msg.ERROR_YELLOW_OPPERATOR_IR_MESSAGE = "「赤外線メッセージ〜を送信する」ブロックの内部の「演算」カテゴリのブロックの255よりも大きい値は、送信されません。";
Blockly.Msg.ERROR_YELLOW_FOREVER_LOOP_IN = "A 'forever' loop will continue looping until you press the square button on Edison.";
Blockly.Msg.ERROR_YELLOW_SET_MOTOR_LEFT = "「〜で左モーターを〜設定にする」は左モーターを設定するだけです。左モーターを動かすには他のブロックを追加で接続してください。";
Blockly.Msg.ERROR_YELLOW_SET_MOTOR_RIGHT = "「〜で右モーターを〜設定にする」は右モーターを設定するだけです。右モーターを動かすには他のブロックを追加で接続してください。";
Blockly.Msg.ERROR_YELLOW_SET_MOTOR_BOTH = "「〜で両方のモーターを〜設定にする」は両方のモーターを設定するだけです。両方のモーターを動かすには他のブロックを追加で接続してください。";
Blockly.Msg.ERROR_YELLOW_CLAP_EVENT_DRIVE = "拍手検出は、モーターが動いている間はモーターのノイズが大きいため動作しません。";
Blockly.Msg.ERROR_YELLOW_FLOAT_BLOCKS = "「イベント」カテゴリや「ブロック定義」カテゴリのブロックに接続されていないブロックは実行されません。";
Blockly.Msg.ERROR_YELLOW_WAIT_TIME_LIGHT = "「〜秒待つ」ブロックの内部の「〜で検出された光量」ブロックは、大きな値となる場合があるため、長時間待ち続ける動作を引き起こす可能性があります。";
Blockly.Msg.ERROR_YELLOW_REPEAT_LOOP_LIGHT = "「〜回繰り返す」ブロックの内部の「〜で検出された光量」ブロックは、大きな値となる場合があるため、長時間繰り返し続ける動作を引き起こす可能性があります。";
Blockly.Msg.ERROR_YELLOW_DRIVE_STRAIN = "「動きの異常が検出された」ブロックは、モーターが動作している場合のみ動作します。";
Blockly.Msg.ERROR_YELLOW_DRIVE_STRAIN_EVENT = "「動きの異常が検出されたとき」ブロックは、モーターが動作している場合のみ動作します。";
Blockly.Msg.ERROR_YELLOW_COMMENT = "「コメント」カテゴリのブロックはメモを残すためのものであり、実行されません。";
Blockly.Msg.ERROR_YELLOW_USB_USED = "「USB」ブロックの動作には、EdisonをデバイスにUSB接続する必要があります。";
Blockly.Msg.ERROR_YELLOW_CLEAR_SENSOR = "いくつかのセンサデータはEdison内部のメモリに保持されます。必要に応じて、「〜のデータをクリアする」ブロックでセンサデータをクリアしてください。";
Blockly.Msg.ERROR_YELLOW_CLEAR_LEARN_MORE = "詳細";



// Firmware Error
Blockly.Msg.MODAL_FIRMWARE_ERROR_TITLE = "Firmware error"; // divFirmwareErrorLabel


Blockly.Msg.MODAL_FIRMWARE_ERROR_BODY_1 = "A corrupted firmware file has been detected in your Edison robot.";
Blockly.Msg.MODAL_FIRMWARE_ERROR_BODY_2 = "This may have occurred during a firmware update that was interrupted.";
Blockly.Msg.MODAL_FIRMWARE_ERROR_BODY_3 = "Don't panic! This can be fixed by clicking the 'Fix firmware' button below.";

Blockly.Msg.MODAL_FIRMWARE_ERROR_CANCEL_BODY_1 = "Warning!"; //divFirmwareErrorCancelBody1
Blockly.Msg.MODAL_FIRMWARE_ERROR_CANCEL_BODY_2 = "Canceling this process means that your Edison robot can not be programmed."; //divFirmwareErrorCancelBody2
Blockly.Msg.MODAL_FIRMWARE_ERROR_CANCEL_BODY_3 = "It is recommended that you fix the firmware now by clicking the Fix firmware button."; //divFirmwareErrorCancelBody3
Blockly.Msg.MODAL_FIRMWARE_ERROR_CANCEL_BODY_4 = "If you choose to cancel you can fix the firmware at a later time."; ////divFirmwareErrorCancelBody4

Blockly.Msg.MODAL_FIRMWARE_ERROR_BUTTON_FIX = "Fix firmware"; //btnFixFirmware
Blockly.Msg.MODAL_FIRMWARE_ERROR_BUTTON_CANCEL = "Cancel"; //btnFixFirmwareCancel
Blockly.Msg.MODAL_FIRMWARE_ERROR_BUTTON_CANCEL_CONFIRM = "Confirm cancel"; //btnFixFirmwareCancelConfirm




//test lang messages
Blockly.Msg.CHANGELANG = "Change language";
