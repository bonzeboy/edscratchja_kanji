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
Blockly.Msg.CONTROL_FOREVER = 'forever';
Blockly.Msg.CONTROL_REPEAT = 'repeat';
Blockly.Msg.CONTROL_IF = 'if';
Blockly.Msg.CONTROL_THAN = 'then';
Blockly.Msg.CONTROL_ELSE = 'else';
Blockly.Msg.CONTROL_STOP = 'stop';
Blockly.Msg.CONTROL_STOP_ALL = 'all';
Blockly.Msg.CONTROL_STOP_THIS = 'this script';
Blockly.Msg.CONTROL_STOP_OTHER = 'other scripts in sprite';
Blockly.Msg.CONTROL_WAIT = 'wait';
Blockly.Msg.CONTROL_WAIT_SEC = 'sec';
Blockly.Msg.CONTROL_WAIT_MILLISECONDS = 'milliseconds';
Blockly.Msg.CONTROL_WAITUNTIL = 'wait until';
Blockly.Msg.CONTROL_REPEATUNTIL = 'repeat until';
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
Blockly.Msg.DATA_BUTTONCREATE = 'Make a variable';
Blockly.Msg.DATA_BUTTONMANAGE = 'Manage variables';
//Blockly.Msg.DATA_SETVARIABLETO = '';
Blockly.Msg.DATA_SET = "set";
Blockly.Msg.DATA_TO = "to";
Blockly.Msg.DATA_INCVARIABLE = 'increment';
Blockly.Msg.DATA_DECVARIABLE = 'decrement';
Blockly.Msg.DATA_BITSHIFT = "bit shift";
Blockly.Msg.DATA_BITSHIFTLEFT = 'left by';
Blockly.Msg.DATA_BITSHIFTRIGHT = 'right by';


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
Blockly.Msg.EVENT_ANY_OBSTACLE = 'Any obstacle detected';
Blockly.Msg.EVENT_OBSTACLE_AHEAD = 'Obstacle detected ahead';
Blockly.Msg.EVENT_OBSTACLE_LEFT = 'Obstacle detected left';
Blockly.Msg.EVENT_OBSTACLE_RIGHT = 'Obstacle detected right';
Blockly.Msg.EVENT_CLAP = 'Clap detected';
Blockly.Msg.EVENT_BUTTON_TRIANGLE = 'Triangle button pressed';
Blockly.Msg.EVENT_BUTTON_ROUND = 'Round button pressed';
Blockly.Msg.EVENT_LINE_REFLECTIVE = 'Line tracker on reflective surface';
Blockly.Msg.EVENT_LINE_NON_REFLECTIVE = 'Line tracker on non-reflective surface';
Blockly.Msg.EVENT_LINE_CHANGE = 'Line tracker changes surface';
Blockly.Msg.EVENT_MESSAGE = 'IR message received';
Blockly.Msg.EVENT_REMOTE = 'Remote code received';
Blockly.Msg.EVENT_DRIVE_STRAIN = 'Drive strained';
Blockly.Msg.EVENT_START = 'Start';




// Looks blocks

// Motion blocks
// Operators blocks
Blockly.Msg.OPERATORS_ADD = '%1 + %2';
Blockly.Msg.OPERATORS_SUBTRACT = '%1 - %2';
Blockly.Msg.OPERATORS_MULTIPLY = '%1 * %2';
Blockly.Msg.OPERATORS_DIVIDE = '%1 / %2';
Blockly.Msg.OPERATORS_RANDOM = 'random number between';
Blockly.Msg.OPERATORS_LT = '%1 < %2';
Blockly.Msg.OPERATORS_LT_EQUAL = '%1 <= %2';
Blockly.Msg.OPERATORS_EQUALS = '%1 = %2';
Blockly.Msg.OPERATORS_GT_EQUAL = '%1 >= %2';
Blockly.Msg.OPERATORS_GT = '%1 > %2';
Blockly.Msg.OPERATORS_AND = 'and';
Blockly.Msg.OPERATORS_OR = 'or';
Blockly.Msg.OPERATORS_NOT_EQUALS = '%1 != %2';
Blockly.Msg.OPERATORS_NOT = 'not';
Blockly.Msg.OPERATORS_ABS = 'abs';
Blockly.Msg.OPERATORS_BETWEEN = 'is between';




// Procedures blocks
Blockly.Msg.PROCEDURES_DEFINITION = 'define %1';

// Sensing blocks
Blockly.Msg.SENSING_TURN_LINE_TRACKING_LED = 'turn line tracking LED';
Blockly.Msg.SENSING_TURN_OBSTACLE_BEAM = 'turn obstacle detection beam';
Blockly.Msg.SENSING_CLEAR = 'clear';
Blockly.Msg.SENSING_SENSOR = 'sensor data';
Blockly.Msg.SENSING_CLAP_DETECTED = 'clap detected';
Blockly.Msg.SENSING_BUTTON_PRESSED = 'button pressed';
Blockly.Msg.SENSING_OBSTACLE = 'obstacle detected';
Blockly.Msg.SENSING_LINE_TRACKER = 'line tracker on';
Blockly.Msg.SENSING_LINE_SURFACE = "surface";
Blockly.Msg.SENSING_REMOTE_NUM = 'received remote code';
Blockly.Msg.SENSING_REMOTE_BOOL = 'remote code';
Blockly.Msg.SENSING_REMOTE_RECEIVED = 'received';
Blockly.Msg.SENSING_IR_MESSAGE_DETECTED = 'IR message detected';
Blockly.Msg.SENSING_IR_MESSAGE = 'received IR message';
Blockly.Msg.SENSING_LIGHT_LEVEL = 'light level of';
Blockly.Msg.SENSING_LIGHT_SENSOR = 'sensor';
Blockly.Msg.SENSING_DRIVE_STRAIN = 'drive strain detected';

Blockly.Msg.SENSING_DROPDOWN_ON = "on";
Blockly.Msg.SENSING_DROPDOWN_OFF = "off";

Blockly.Msg.SENSING_CLEAR_DROPDOWN_CLAP = "clap detector";
Blockly.Msg.SENSING_CLEAR_DROPDOWN_KEY = "keypad";
Blockly.Msg.SENSING_CLEAR_DROPDOWN_OBS = "obstacle detector";
Blockly.Msg.SENSING_CLEAR_DROPDOWN_REMOTE = "remote code";
Blockly.Msg.SENSING_CLEAR_DROPDOWN_IR = "IR message";

Blockly.Msg.SENSING_KEY_DROPDOWN_ROUND = "round";
Blockly.Msg.SENSING_KEY_DROPDOWN_TRIANGLE = "triangle";

Blockly.Msg.SENSING_OBS_DROPDOWN_ANY = "anywhere";
Blockly.Msg.SENSING_OBS_DROPDOWN_AHEAD = "ahead";
Blockly.Msg.SENSING_OBS_DROPDOWN_LEFT = "left";
Blockly.Msg.SENSING_OBS_DROPDOWN_RIGHT = "right";

Blockly.Msg.SENSING_LINE_DROPDOWN_WHITE = "reflective ";
Blockly.Msg.SENSING_LINE_DROPDOWN_BLACK = "non-reflective";

Blockly.Msg.SENSING_LIGHT_DROPDOWN_LEFT = "left light";
Blockly.Msg.SENSING_LIGHT_DROPDOWN_RIGHT = "right light";
Blockly.Msg.SENSING_LIGHT_DROPDOWN_LINE = "line tracking";

Blockly.Msg.COMMENT_USER_COMMENT = 'comment:';

Blockly.Msg.ADVANCED_USB_SEND_DATA = 'send';
Blockly.Msg.ADVANCED_USB_SEND_VIA = 'via USB';
Blockly.Msg.ADVANCED_USB_RECEIVED_DATA = 'data received from USB';
Blockly.Msg.ADVANCED_USB_RECEIVED_DATA_VAR = 'wait for USB data and save to';

// Sound blocks
Blockly.Msg.SOUND_BEEP = "beep";
Blockly.Msg.SOUND_PLAY_NOTE = 'play a';
Blockly.Msg.SOUND_PLAY_NOTE_DROP_DURATION_WHOLE = "whole";
Blockly.Msg.SOUND_PLAY_NOTE_DROP_DURATION_HALF = "half";
Blockly.Msg.SOUND_PLAY_NOTE_DROP_DURATION_QUARTER = "quarter";
Blockly.Msg.SOUND_PLAY_NOTE_DROP_DURATION_EIGHTH = "eighth";
Blockly.Msg.SOUND_PLAY_NOTE_DROP_NOTE_C = "C";
Blockly.Msg.SOUND_PLAY_NOTE_DROP_NOTE_B = "B";
Blockly.Msg.SOUND_PLAY_NOTE_DROP_NOTE_A = "A";
Blockly.Msg.SOUND_PLAY_NOTE_DROP_NOTE_G = "G";
Blockly.Msg.SOUND_PLAY_NOTE_DROP_NOTE_F = "F";
Blockly.Msg.SOUND_PLAY_NOTE_DROP_NOTE_E = "E";
Blockly.Msg.SOUND_PLAY_NOTE_DROP_NOTE_D = "D";
Blockly.Msg.SOUND_PLAY_NOTE_DROP_NOTE_MID_C = "middle C";
Blockly.Msg.SOUND_PLAY_NOTE_DROP_NOTE_LOW_B = "low B";
Blockly.Msg.SOUND_PLAY_NOTE_DROP_NOTE_REST = "rest";
Blockly.Msg.SOUND_PLAY_NOTE_DROP_MOD_NORMAL = " - ";
Blockly.Msg.SOUND_PLAY_NOTE_DROP_MOD_SHARP = "sharp";
Blockly.Msg.SOUND_PLAY_NOTE_DROP_MOD_FLAT = "flat";

Blockly.Msg.SOUND_SET_TEMPO = "set music tempo to";
Blockly.Msg.SOUND_SET_TEMPO_DROP_VERY_SLOW = "very slow ";
Blockly.Msg.SOUND_SET_TEMPO_DROP_SLOW = "slow ";
Blockly.Msg.SOUND_SET_TEMPO_DROP_MEDIUM = "medium";
Blockly.Msg.SOUND_SET_TEMPO_DROP_FAST= "fast";
Blockly.Msg.SOUND_SET_TEMPO_DROP_VERY_FAST = "very fast";

Blockly.Msg.SOUND_PLAY_IN_BACKGROUND = "play music in background";


// Category labels
Blockly.Msg.CATEGORY_MOTION = 'Motion';

Blockly.Msg.CATEGORY_LOOKS = 'Looks';
Blockly.Msg.CATEGORY_SOUND = 'Sound'; //
Blockly.Msg.CATEGORY_EVENTS = 'Events'; //
Blockly.Msg.CATEGORY_CONTROL = 'Control'; //
Blockly.Msg.CATEGORY_SENSING = 'Sensing'; //
Blockly.Msg.CATEGORY_OPERATORS = 'Operators'; //
Blockly.Msg.CATEGORY_VARIABLES = 'Variables'; //
Blockly.Msg.CATEGORY_MYBLOCKS = 'Functions'; //

Blockly.Msg.CATEGORY_DRIVE = 'Drive'; //
Blockly.Msg.CATEGORY_COMMENT = 'Comment'; //
Blockly.Msg.CATEGORY_LED = 'LEDs'; //
Blockly.Msg.CATEGORY_ADVANCED = 'Advanced'; //

// Context menus
Blockly.Msg.DUPLICATE = 'Duplicate';
Blockly.Msg.DELETE = 'Delete';
Blockly.Msg.ADD_COMMENT = 'Add Comment';
Blockly.Msg.REMOVE_COMMENT = 'Remove Comment';
Blockly.Msg.DELETE_BLOCK = 'Delete Block';
Blockly.Msg.DELETE_X_BLOCKS = 'Delete %1 Blocks';
Blockly.Msg.DELETE_ALL_BLOCKS = 'Delete all %1 blocks?';
Blockly.Msg.CLEAN_UP = 'Clean up Blocks';
Blockly.Msg.HELP = 'Help';
Blockly.Msg.UNDO = 'Undo';
Blockly.Msg.REDO = 'Redo';
Blockly.Msg.EDIT_PROCEDURE = 'Edit';
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
Blockly.Msg.NEW_PROCEDURE = 'Make a function';
Blockly.Msg.MANAGE_PROCEDURE = 'Manage a function';
Blockly.Msg.PROCEDURE_ALREADY_EXISTS = 'A procedure named "%1" already exists.';
Blockly.Msg.PROCEDURE_DEFAULT_NAME = 'block name';
Blockly.Msg.PROCEDURE_USED = 'To delete a block definition, first remove all uses of the block';



//Drive block Messages

Blockly.Msg.DRIVE_FORWARDS_DISTANCE = "forwards for";
Blockly.Msg.DRIVE_BACKWARDS_DISTANCE = "backwards for";
Blockly.Msg.DRIVE_LEFT_DISTANCE = "left for";
Blockly.Msg.DRIVE_RIGHT_DISTANCE = "right for";
Blockly.Msg.DRIVE_DISTANCE_DROPDOWN_CM = "cm";
Blockly.Msg.DRIVE_DISTANCE_DROPDOWN_INCH = "inch";
Blockly.Msg.DRIVE_DISTANCE_DROPDOWN_SECONDS = "seconds";
Blockly.Msg.DRIVE_DISTANCE_DROPDOWN_DEGREES = "degrees";
Blockly.Msg.DRIVE_TURN_DROPDOWN_SPIN = "spin";
Blockly.Msg.DRIVE_TURN_DROPDOWN_FORWARDS = "turn forwards";
Blockly.Msg.DRIVE_TURN_DROPDOWN_BACKWARDS = "turn backwards";
Blockly.Msg.DRIVE_FORWARDS_UNTIL = "forwards until";
Blockly.Msg.DRIVE_BACKWARDS_UNTIL = "backwards until";
Blockly.Msg.DRIVE_LEFT_UNTIL = "left until";
Blockly.Msg.DRIVE_RIGHT_UNTIL = "right until";
Blockly.Msg.DRIVE_SET_LEFT_MOTOR = "set left motor to";
Blockly.Msg.DRIVE_SET_RIGHT_MOTOR = "set right motor to";
Blockly.Msg.DRIVE_SET_MOTOR_DROPDOWN_FORWARDS = "forwards";
Blockly.Msg.DRIVE_SET_MOTOR_DROPDOWN_BACKWARDS = "backwards";
Blockly.Msg.DRIVE_SET_BOTH_MOTOR = "set both motors to";
Blockly.Msg.DRIVE_SET_BOTH_MOTOR_DROPDOWN_FORWARDS = "drive forwards";
Blockly.Msg.DRIVE_SET_BOTH_MOTOR_DROPDOWN_BACKWARDS = "drive  backwards";
Blockly.Msg.DRIVE_SET_BOTH_MOTOR_DROPDOWN_SPIN_LEFT = "spin robot left";
Blockly.Msg.DRIVE_SET_BOTH_MOTOR_DROPDOWN_SPIN_RIGHT = "spin robot right";
Blockly.Msg.DRIVE_SET_BOTH_MOTOR_DROPDOWN_TURN_LEFT = "turn robot left";
Blockly.Msg.DRIVE_SET_BOTH_MOTOR_DROPDOWN_TURN_RIGHT = "turn robot right";
Blockly.Msg.DRIVE_AT_SPEED = "at speed";
Blockly.Msg.DRIVE_STOP = "stop";
Blockly.Msg.DRIVE_STOP_DROPDOWN_BOTH = "both motors";
Blockly.Msg.DRIVE_STOP_DROPDOWN_LEFT = "left motor";
Blockly.Msg.DRIVE_STOP_DROPDOWN_RIGHT = "right motor";


//LED Block Messages
Blockly.Msg.LED_LEFT = "turn left LED";
Blockly.Msg.LED_RIGHT = "turn right LED";
Blockly.Msg.LED_DROPDOWN_ON = "on";
Blockly.Msg.LED_DROPDOWN_OFF = "off";
Blockly.Msg.LED_SEND_MESSAGE = "send IR message";



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


Blockly.Msg.MENU_DROP_MENU = "Menu"; //navMenuTop
Blockly.Msg.MENU_DROP_NEW = "New"; //navNew
Blockly.Msg.MENU_DROP_LOAD_DEMO = "Load demo"; //navPopLoadDemo
Blockly.Msg.MENU_DROP_LOAD_LOCAL = "Load from computer"; //navPopLoadLocal
Blockly.Msg.MENU_DROP_SAVE_LOCAL = "Save to computer"; //navPopLoadSave
Blockly.Msg.MENU_DROP_UPDATE_FIRMWARE = "Update firmware"; //navPopFirmwareUpdate
Blockly.Msg.MENU_DROP_DIAGNOSTICS = "Diagnostics"; //navPopHelp
Blockly.Msg.MENU_DROP_ABOUT = "About"; //navPopAbout
Blockly.Msg.MENU_DROP_TERMS = "Terms of use"; //navPopTerms


Blockly.Msg.MENU_USB = "USB"; //navPopUSB
Blockly.Msg.MENU_SAVE = " Save"; //navPopLoadSaveAlt

Blockly.Msg.MENU_VERSION_MAIN = " Edison V3"; //navVersionTop
Blockly.Msg.MENU_VERSION_SWITCH = "Switch to Edison V1/V2"; //navVersionSwitch
Blockly.Msg.MENU_VERSION_WHICH_VERSION = "Which version do I have?"; //navVersionHelp
Blockly.Msg.MENU_PROGRAM = " Program"; //navProgram
Blockly.Msg.MENU_PROGRAM_FLASH = " Program"; //navProgramFlash


Blockly.Msg.MODAL_CREATE_VAR = "Create Variable"; //divCreateVarsTitle
Blockly.Msg.MODAL_CREATE_VAR_NAME = "Variable Name"; //divCreateVarslabel
Blockly.Msg.MODAL_CREATE_VAR_BUTTON = "Create Variable"; //btnCreateVar
Blockly.Msg.MODAL_CREATE_VAR_EXIT = "Exit"; //btnCreateVarDone
Blockly.Msg.MODAL_CREATE_VAR_SUCCESS = "New variable created successfully."; //in file 1511 and 1488 but here for sure

Blockly.Msg.MODAL_MANAGE_VAR = "Variables "; //divManageVarslabel
Blockly.Msg.MODAL_MANAGE_VAR_NAME = "Variable Name"; //divManageVarsName
Blockly.Msg.MODAL_MANAGE_VAR_ACTION = "Action"; //divManageVarsAction
Blockly.Msg.MODAL_MANAGE_VAR_BUTTON_DELETE = "delete"; //in code workspace setup 655
Blockly.Msg.MODAL_MANAGE_VAR_BUTTON_RENAME = "rename"; //in code workspace setup 656
Blockly.Msg.MODAL_MANAGE_VAR_BUTTON_CONFIRM = "confirm"; // in code 1378
Blockly.Msg.MODAL_MANAGE_VAR_BUTTON_CANCEL = "cancel"; // in code 1378
Blockly.Msg.MODAL_MANAGE_VAR_CONFIRM_NOT_CHANGED = "You did not change the variable name. Please try again."; //in code 1401
Blockly.Msg.MODAL_MANAGE_VAR_CONFIRM_SUCCESS = "Variable renamed successfully!"; //in code 1423

Blockly.Msg.MODAL_MANAGE_VAR_NAME_NONE = "Please enter a variable name."; //in code 1554
Blockly.Msg.MODAL_MANAGE_VAR_NAME_IN_USE = "You already have a variable with that name."; //in code 1558
Blockly.Msg.MODAL_MANAGE_VAR_NAME_UNSUPPORTED = "Variable name contains an unsupported character. Variable names can only contain lowercase English letters, uppercase English letters, numbers, and underscores ( _ )."; //line 1563
Blockly.Msg.MODAL_MANAGE_VAR_NAME_NUMBER_START = "Variable names cannot start with a number."; //in code 1567

Blockly.Msg.MODAL_MANAGE_VAR_DELETE_IN_USE = "This variable is currently being used in your program. Are you sure you want to delete it?"; //in code 11619
Blockly.Msg.MODAL_MANAGE_VAR_DELETE_CONFIRM = "Yes"; //in code line 1619
Blockly.Msg.MODAL_MANAGE_VAR_DELETE_DECLINE = "No"; //in code line 1619

Blockly.Msg.MODAL_CREATE_FUNCT = "Create Function"; //divCreateFunctTitle
Blockly.Msg.MODAL_CREATE_FUNCT_NAME = "Function Name"; //divCreateFunctLabel
Blockly.Msg.MODAL_CREATE_FUNCT_WARNING = "Alphanumeric characters only and must begin with a letter."; //divCreateFunctWarning
Blockly.Msg.MODAL_CREATE_FUNCT_BUTTON = "Create Function"; //btnCreateFunc
Blockly.Msg.MODAL_CREATE_FUNCT_BUTTON_EXIT = "Exit"; //btnCreateFuncDone
Blockly.Msg.MODAL_CREATE_FUNCT_SUCCESS = "New function created successfully.";

Blockly.Msg.MODAL_MANAGE_FUNCT = "Functions "; //divManageFunctlabel
Blockly.Msg.MODAL_MANAGE_FUNCT_NAME = "Function Name"; //divManageFunctName
Blockly.Msg.MODAL_MANAGE_FUNCT_ACTION = "Action"; //divManageFunctAction
Blockly.Msg.MODAL_MANAGE_FUNCT_BUTTON_DELETE = "delete"; //in code workspace setup 655
Blockly.Msg.MODAL_MANAGE_FUNCT_BUTTON_RENAME = "rename"; //in code workspace setup 656
Blockly.Msg.MODAL_MANAGE_FUNCT_BUTTON_CONFIRM = "confirm"; // in code 1378
Blockly.Msg.MODAL_MANAGE_FUNCT_BUTTON_CANCEL = "cancel"; // in code 1378
Blockly.Msg.MODAL_MANAGE_FUNCT_CONFIRM_NOT_CHANGED = "You did not change the function name. Please try again."; //in code 1401
Blockly.Msg.MODAL_MANAGE_FUNCT_CONFIRM_SUCCESS = "Function renamed successfully!"; //in code 1423

Blockly.Msg.MODAL_MANAGE_FUNCT_NAME_NONE = "Please enter a function name."; //in code
Blockly.Msg.MODAL_MANAGE_FUNCT_NAME_IN_USE = "You already have a function with that name."; //in code
Blockly.Msg.MODAL_MANAGE_FUNCT_NAME_START_WITH = "User function names cannot start with";
Blockly.Msg.MODAL_MANAGE_FUNCT_NAME_UNSUPPORTED = "Function name contains an unsupported character. Function names can only contain lowercase English letters, uppercase English letters, numbers, and underscores ( _ )."; //line
Blockly.Msg.MODAL_MANAGE_FUNCT_NAME_NUMBER_START = "Function names cannot start with a number."; //in code 1567

Blockly.Msg.MODAL_MANAGE_FUNCT_DELETE_IN_USE = "This function is currently being used in your program. Are you sure you want to delete it?"; //in code 11619
Blockly.Msg.MODAL_MANAGE_FUNCT_DELETE_CONFIRM = "Yes"; //in code line 1619
Blockly.Msg.MODAL_MANAGE_FUNCT_DELETE_DECLINE = "No"; //in code line 1619

Blockly.Msg.MODAL_SAVE_TITLE = "Save to computer"; //no ID yet
Blockly.Msg.MODAL_SAVE_PROG_TITLE = "Program name"; //no ID yet
Blockly.Msg.MODAL_SAVE_BUTTON = "Save to computer"; //no ID yet
Blockly.Msg.MODAL_SAVE_ERROR_NO_NAME = "Please enter a name for your program. You need to name the program in order to save it."; //1050 in function, replace
Blockly.Msg.MODAL_SAVE_ERROR_LONG_NAME = "Whoops. There's a problem with that program name. Program names can be a maximum of 255 characters long."; //1052 in function, replace
Blockly.Msg.MODAL_SAVE_SAVING = "OK! Your program is being saved. The download of your program should begin soon."; //268 in function, replace

Blockly.Msg.MODAL_LOAD_PC_TITLE = "Load from computer"; //no ID yet
Blockly.Msg.MODAL_LOAD_PC_FILE_ERROR_1 = "Please select an EdScratch save file."; //no ID yet
Blockly.Msg.MODAL_LOAD_PC_FILE_ERROR_2 = "All EdScratch save files are file type"; //no ID yet
Blockly.Msg.MODAL_LOAD_PC_FILE_ERROR_3 = ".edscratch"; //no ID yet
Blockly.Msg.MODAL_LOAD_PC_FILE_BUTTON = "Select a file to upload..."; //no ID yet
Blockly.Msg.MODAL_LOAD_PC_BUTTON = "Load program"; //btnLoadLocal
Blockly.Msg.MODAL_LOAD_PC_NO_FILE_ERROR_1 = "You haven't selected a file yet. Please first select an EdScratch save file from your computer, then load the file. [All EdScratch save files are file type (.edscratch).]"; //IN FILE 398
Blockly.Msg.MODAL_LOAD_PC_FILE_DATA_ERROR_1 = "Uh-oh. There's a problem with the data in that file."; //IN FILE 417
Blockly.Msg.MODAL_LOAD_PC_FILE_DATA_ERROR_2 = "Please upload a different EdScratch save file. [All EdScratch save files are file type (.edscratch).]"; //IN FILE 417
Blockly.Msg.MODAL_LOAD_PC_FILE_TYPE_ERROR_1 = "Uh-oh. You've uploaded an incorrect file type."; //IN FILE 417
Blockly.Msg.MODAL_LOAD_PC_FILE_TYPE_ERROR_2 = "Please upload an EdScratch save file. [All EdScratch save files are file type (.edscratch).]"; //IN FILE 417
Blockly.Msg.MODAL_LOAD_PC_FILE_READY = "Ready to load program:";


Blockly.Msg.MODAL_LOAD_DEMO_TITLE = "Load demo"; //no ID yet
Blockly.Msg.MODAL_LOAD_DEMO_BUTTON = "Load program"; //471 IN FILE


Blockly.Msg.MODAL_ABOUT_TITLE = "About EdScratch"; //divAboutLabel
Blockly.Msg.MODAL_ABOUT_COPYRIGHT = "Copyright 2023 Microbric Pty Ltd"; //divAboutCopyright
Blockly.Msg.MODAL_ABOUT_BODY_1 = "The EdScratch app was developed using the Scratch Blocks code base developed by MIT. Scratch Blocks was built on the Blockly code base developed by Google."//divAboutMIT
Blockly.Msg.MODAL_ABOUT_BODY_2 = "Contributions and credits:"; // divAboutCredits
Blockly.Msg.MODAL_ABOUT_BODY_3 = "EdScratch programming language and block compiler developed by Ben Hayton, Microbric"// divAboutCreditsBen
Blockly.Msg.MODAL_ABOUT_BODY_4 = "EdScratch user interface developed by Sean Killian, Killian Web Development"// divAboutCreditsSean
Blockly.Msg.MODAL_ABOUT_BODY_5 = "Edison V3 firmware developed by Damien George, George Robotics (MicroPython code base)"// divAboutCreditsDamien


Blockly.Msg.MODAL_DIAGNOSTICS = "Diagnostics"; //divDiagnosticsLabel
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

Blockly.Msg.MODAL_FIRMWARE_UPDATE_TITLE = "Firmware update"; //divFirmwareUpdateLabel
Blockly.Msg.MODAL_FIRMWARE_UPDATE_LATEST = "The latest Edison V3 firmware version is: "; //divFirmwareLatestVersion
Blockly.Msg.MODAL_FIRMWARE_UPDATE_POPUP = "Use this pop-up to update the firmware in your Edison."; //divFirmwareUseThis
Blockly.Msg.MODAL_FIRMWARE_UPDATE_TO_UPDATE1 = "To update Edison V3 firmware:"; //divFirmwareToUpdate
Blockly.Msg.MODAL_FIRMWARE_UPDATE_TO_UPDATE2 = "Plug in your Edison and click the 'Update firmware' button below then follow the prompts."; //divFirmwareFollowPrompts
Blockly.Msg.MODAL_FIRMWARE_UPDATE_TO_UPDATE_BUTTON = "Update firmware "; //btnFUHubConnect
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


Blockly.Msg.MODAL_USB_CONTROL = "USB Controls"; //no ID yet
Blockly.Msg.MODAL_USB_RUN_BUTTON = "Run USB"; //usbRun
Blockly.Msg.MODAL_USB_CONNECTED_STATUS = "CONNECTED"; //IN FILE 583
Blockly.Msg.MODAL_USB_DISCONNECTED_STATUS = "DISCONNECTED"; //IN FILE 590 AND 601
Blockly.Msg.MODAL_USB_RUNNING_STATUS = "RUNNING"; //IN FILE 595
Blockly.Msg.MODAL_USB_DATA_TO = "Data to USB"; //no ID yet
Blockly.Msg.MODAL_USB_DATA_TO_BUTTON = "Send to USB"; //usbSend
Blockly.Msg.MODAL_USB_DATA_FROM = "Data from USB"; //no ID yet
Blockly.Msg.MODAL_USB_DATA_FROM_CLEAR = "Clear"; //usbClear
Blockly.Msg.MODAL_USB_DATA_FROM_COPY = "Copy to clipboard"; //usbExport AND 614 IN CODE
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

Blockly.Msg.MODAL_LOADING = "Loading workspace..."; //divLoadingLabel

Blockly.Msg.MODAL_FLASHER_TITLE = "Flasher"; //no ID yet
Blockly.Msg.MODAL_FLASHER_STEP_1 = "Place Edison over image"; //no ID yet
Blockly.Msg.MODAL_FLASHER_STEP_2 = "Press Edison's round button once"; //no ID yet
Blockly.Msg.MODAL_FLASHER_STEP_3 = "Press 'Download program'"; //no ID yet
Blockly.Msg.MODAL_FLASHER_RELIABLE = "Reliable"; //no ID yet
Blockly.Msg.MODAL_FLASHER_FAST = "Fast"; //no ID yet
Blockly.Msg.MODAL_FLASHER_ADJUST_SPEED = "If the download does not work or is not fast enough, try adjusting the speed above. The lowest speed is usually the most reliable."; //no ID yet
Blockly.Msg.MODAL_FLASHER_DOWNLOAD = "Download program"; //no ID yet
Blockly.Msg.MODAL_FLASHER_CANCEL = "Cancel"; //no ID yet
Blockly.Msg.MODAL_FLASHER_TIPS_HEADING = "Tips"; //no ID yet
Blockly.Msg.MODAL_FLASHER_TIPS_BODY_1 = "Adjust screen brightness between 80% to 90%."; //divFlasherTipsBody1
Blockly.Msg.MODAL_FLASHER_TIPS_BODY_2 = "Move away from direct and in-direct sunlight or bright lights. "; //divFlasherTipsBody2
Blockly.Msg.MODAL_FLASHER_TIPS_BODY_3 = "Ensure you have updated Edison V3 to the latest firmware."; //divFlasherTipsBody3
Blockly.Msg.MODAL_FLASHER_DOWNLOADING = "Downloading...";
Blockly.Msg.MODAL_FLASHER_COMPLETE = "Complete";
Blockly.Msg.MODAL_FLASHER_BYTES = "bytes in";
Blockly.Msg.MODAL_FLASHER_SECONDS = "seconds";

Blockly.Msg.ERROR_RED_OBS_SETTING = "'Obstacle detection' blocks do not work unless the obstacle detection beam is turned on using the 'obstacle detection beam' block from the 'Sensing' category.";
Blockly.Msg.ERROR_RED_OBS_SETTING_EVENT = "'Obstacle detection' events do not work unless the obstacle detection beam is turned on using the 'obstacle detection beam' block from the 'Sensing' category in the main program.";
Blockly.Msg.ERROR_RED_LINE_SETTING = "'Line detection' blocks do not work unless the line detection LED is turned on using the 'line tracking LED' block from the 'Sensing' category.";
Blockly.Msg.ERROR_RED_LINE_SETTING_EVENT = "'Line detection' events do not work unless the line detection LED is turned on using the 'line tracking LED' block from the 'Sensing' category in the main program.";
Blockly.Msg.ERROR_RED_DRIVE_CLAP = "Edison cannot detect claps while driving because the motors are too noisy.";
Blockly.Msg.ERROR_RED_EMPTY_IN_FORWARDS = "'Forwards until' blocks need a condition input.";
Blockly.Msg.ERROR_RED_EMPTY_IN_BACKWARDS = "'Backwards until' blocks need a condition input.";
Blockly.Msg.ERROR_RED_EMPTY_IN_LEFT = "'Left until' blocks need a condition input.";
Blockly.Msg.ERROR_RED_EMPTY_IN_RIGHT = "'Right until' blocks need a condition input.";
Blockly.Msg.ERROR_RED_EMPTY_IN_SET_VAR = "'Set variable' blocks need a variable.";
Blockly.Msg.ERROR_RED_EMPTY_IN_INC_VAR = "'Increment variable' blocks need a variable.";
Blockly.Msg.ERROR_RED_EMPTY_IN_DEC_VAR = "'Decrement variable' blocks need a variable.";
Blockly.Msg.ERROR_RED_EMPTY_IN_IF = "'If' blocks need a condition input.";
Blockly.Msg.ERROR_RED_EMPTY_IN_IF_ELSE = "'If-else' blocks need a condition input.";
Blockly.Msg.ERROR_RED_EMPTY_IN_WAIT = "'Wait until' blocks need a condition input.";
Blockly.Msg.ERROR_RED_EMPTY_IN_WAIT_MILLI = "'Wait milliseconds' blocks need an input value.";
Blockly.Msg.ERROR_RED_EMPTY_IN_REP = "'Repeat until' blocks need a condition input.";
Blockly.Msg.ERROR_RED_EMPTY_IN_BS_RIGHT = "'Bit shift right' blocks need a variable.";
Blockly.Msg.ERROR_RED_EMPTY_IN_BS_LEFT = "'Bit shift left' blocks need a variable.";
Blockly.Msg.ERROR_RED_EMPTY_IN_OPERATOR_NOT = "'Not' blocks need a condition input.";
Blockly.Msg.ERROR_RED_EMPTY_IN_OPERATOR_AND = "'And' blocks need a condition input.";
Blockly.Msg.ERROR_RED_EMPTY_IN_OPERATOR_OR = "'Or' blocks need a condition input.";
Blockly.Msg.ERROR_RED_EMPTY_BACKGROUND_MUSIC = "'Play music in background' grouping blocks need to contain at least one 'note' block.";
Blockly.Msg.ERROR_RED_NO_START = "Programs must have a 'start' event to work correctly. If you are seeing this error message, start a new program by going to the menu and selecting 'new'.";
Blockly.Msg.ERROR_RED_NOT_BACKGROUND_MUSIC = "'Play music in background' grouping blocks can only accept 'note' blocks.";
Blockly.Msg.ERROR_RED_NO_MAIN_BLOCKS = "There are no blocks connected to the 'start' event, so there is no main program for Edison to run.";
Blockly.Msg.ERROR_RED_EMPTY_IN_USB_RECEIVED = "'wait for usb data' blocks need a variable.";
Blockly.Msg.ERROR_RED_DEVIDE_BY_ZERO = "'Devide operator' blocks cannot devide by zero.";
Blockly.Msg.ERROR_RED_FUNCTION_IN_FUNCTION = "Function call blocks cannot be placed under a function start block";


Blockly.Msg.ERROR_YELLOW_RECEIVE_MESSAGE_OBS_ON = "Edison cannot receive messages while 'obstacle detection' is on. Make sure to turn obstacle detection off in the program before attempting to receive a message.";
Blockly.Msg.ERROR_YELLOW_RECEIVE_REMOTE_OBS_ON = "Edison cannot receive remote control codes while 'obstacle detection' is on. Make sure to turn obstacle detection off in the program before attempting to receive a remote code.";
Blockly.Msg.ERROR_YELLOW_RECEIVE_MESSAGE_EVENT_OBS_ON = "Edison cannot receive messages while 'obstacle detection' is on. Make sure to turn obstacle detection off in the main program before attempting to receive a message.";
Blockly.Msg.ERROR_YELLOW_RECEIVE_REMOTE_EVENT_OBS_ON = "Edison cannot receive remote control codes while 'obstacle detection' is on. Make sure to turn obstacle detection off in the main program before attempting to receive a remote code.";
Blockly.Msg.ERROR_YELLOW_READ_LIGHT_LINE_OFF = "Consider turning the line detection LED on using the 'line tracking LED' block from the 'Sensing' category if measuring reflectiveness of the driving surface.";
Blockly.Msg.ERROR_YELLOW_OPPERATOR_WAIT_UNTIL = "An 'operator' block inside a 'wait until' block may cause Edison to wait forever or skip the 'wait' block.";
Blockly.Msg.ERROR_YELLOW_OPPERATOR_REPEAT_UNTIL = "An 'operator' block inside a 'repeat until' block may cause Edison to loop forever or skip the 'repeat' block.";
Blockly.Msg.ERROR_YELLOW_OPPERATOR_WAIT = "An 'operator' block inside a 'wait' block may cause Edison to skip the 'wait' block.";
Blockly.Msg.ERROR_YELLOW_OPPERATOR_REPEAT = "An 'operator' block inside a 'repeat' block may cause Edison to skip the 'repeat' block.";
Blockly.Msg.ERROR_YELLOW_OPPERATOR_DRIVE_FOR_UNTIL = "An 'operator' block inside a 'drive forwards until' block may cause Edison to drive forever or skip the drive block.";
Blockly.Msg.ERROR_YELLOW_OPPERATOR_DRIVE_BACK_UNTIL = "An 'operator' block inside a 'drive backwards until' block may cause Edison to drive forever or skip the drive block.";
Blockly.Msg.ERROR_YELLOW_OPPERATOR_DRIVE_LEFT_UNTIL = "An 'operator' block inside a 'drive left until' block may cause Edison to drive forever or skip the drive block.";
Blockly.Msg.ERROR_YELLOW_OPPERATOR_DRIVE_RIGHT_UNTIL = "An 'operator' block inside a 'drive right until' block may cause Edison to drive forever or skip the drive block.";
Blockly.Msg.ERROR_YELLOW_OPPERATOR_DRIVE_FOR_DIST = "An 'operator' block inside a 'drive forwards' block may cause Edison to skip the drive block.";
Blockly.Msg.ERROR_YELLOW_OPPERATOR_DRIVE_BACK_DIST = "An 'operator' block inside a 'drive backwards' block may cause Edison to skip the drive block.";
Blockly.Msg.ERROR_YELLOW_OPPERATOR_DRIVE_LEFT_DIST = "An 'operator' block inside a 'drive left' block may cause Edison to skip the drive block.";
Blockly.Msg.ERROR_YELLOW_OPPERATOR_DRIVE_RIGHT_DIST = "An 'operator' block inside a 'drive right' block may cause Edison to skip the drive block.";
Blockly.Msg.ERROR_YELLOW_DRIVE_LIGHT = "An 'light level' block inside a 'drive' block may cause Edison to drive forever or skip the drive block.";
Blockly.Msg.ERROR_YELLOW_OPPERATOR_IR_MESSAGE = "An 'operator' block inside a 'send IR message' block will not be able to send a value larger then 255";
Blockly.Msg.ERROR_YELLOW_FOREVER_LOOP_IN = "A 'forever' loop will continue looping until you press the square button on Edison.";
Blockly.Msg.ERROR_YELLOW_SET_MOTOR_LEFT = "The 'set left motor' block will only turn the left motor on. Make sure there are additional blocks used in the program to control the left motor's duration.";
Blockly.Msg.ERROR_YELLOW_SET_MOTOR_RIGHT = "The 'set right motor' block will only turn the right motor on. Make sure there are additional blocks used in the program to control the right motor's duration.";
Blockly.Msg.ERROR_YELLOW_SET_MOTOR_BOTH = "The 'set both motors' block will only turn the motors on. Make sure there are additional blocks used in the program to control the motor's duration.";
Blockly.Msg.ERROR_YELLOW_CLAP_EVENT_DRIVE = "Driving the motors creates noise which may cause the 'clap' event to trigger. This may cause the 'clap event' blocks to trigger repeatedly while Edison is driving.";
Blockly.Msg.ERROR_YELLOW_FLOAT_BLOCKS = "Blocks not connected to a yellow 'event' block or 'function definition' block will not be programmed into Edison.";
Blockly.Msg.ERROR_YELLOW_WAIT_TIME_LIGHT = "Light level will return a very high value which may cause Edison to wait for a long time.";
Blockly.Msg.ERROR_YELLOW_REPEAT_LOOP_LIGHT = "Light level will return a very high value which may cause Edison to loop for a long time.";
Blockly.Msg.ERROR_YELLOW_DRIVE_STRAIN = "The 'drive strain detected' block will only detect strain while the motors are running.";
Blockly.Msg.ERROR_YELLOW_DRIVE_STRAIN_EVENT = "The 'drive strained' event can only trigger while the motors are running.";
Blockly.Msg.ERROR_YELLOW_COMMENT = "Comments are notes to help keep track of things. Comment blocks will not be programmed into Edison.";
Blockly.Msg.ERROR_YELLOW_USB_USED = "USB blocks require Edison to be plugged into a device to work";
Blockly.Msg.ERROR_YELLOW_CLEAR_SENSOR = "Some sensor data is stored in Edison's memory. You may need to clear the sensor data for your program to work correctly.";
Blockly.Msg.ERROR_YELLOW_CLEAR_LEARN_MORE = "Learn More";



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
