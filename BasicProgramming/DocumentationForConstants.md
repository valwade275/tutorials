# Exercise 4: Documenting Constants

## Here are the lines of code that need documenting:
const productName = "RoboBall";
const versionNumber = 1.6;
const commStop = 0x00;
const commMoveForward = 0x01;
const commMoveBackward = 0x02;
const commTurnLeft = 0x03;
const commTurnRight = 0x04;
const errBadSignal = 0xFF01;
const errBadCommand = 0xFF02;
const errBatteryLow = 0xFF03;

## Documentation Table
| Name     | Description     | Type     | Variable     | 
| -------- | --------------- | -------- | ------------ |
| commMoveBackward | Command code to send to the robot to move it backward. | Number | 0x02 |
| commMoveForward | Command code to send to the robot to move it forward. | Number | 0x01 |
| commStop | Command code to send to the robot to make it stop moving. | Number | 0x00 |
| commTurnLeft | Command code to send to the robot to make it turn left. | Number | 0x03 |
| commTurnRight | Command code to send to the robot to make it turn right. | Number | 0x04 |
| errBadCommand | Error code sent by the robot when it does not recognize a command. | Number | 0xFF02 |
| errBadSignal | Error code sent by the robot when it is receiving a bad signal from the device. | Number | 0xFF01 |
| errBatteryLow | Error code sent by the robot when it has low battery power. | Number | OxFF03 | 
| productName | Name of the physical product. | String | RoboBall |
| versionNumber | Version number of the SDK. | Number | 1.6 | 

## Documentation Code
```js
const commMoveBackward = 0x02;
```
Command code to send to the robot to move it backward.

```js
const commMoveForward = 0x01;
```
Command code to send to the robot to move it forward.

```js
const commStop = 0x00;
```
Command code to send to the robot to make it stop moving.

```js
const commTurnLeft = 0x03;
```
Command code to send to the robot to make it turn left.

```js
const commTurnRight = 0x04;
```
Command code to send to the robot to make it turn right.

```js
const errBadCommand = 0xFF02;
```
Error code sent by the robot when it does not recognize a command.

```js
const errBadSignal = 0xFF01;
```
Error code sent by the robot when it is receiving a bad signal from the device.

```js
const errBatteryLow = 0xFF03;
```
Error code sent by the robot when it has low battery power.

```js
const productName = "RoboBall";
```
Name of the physical product.

```js
const versionNumber = 1.6;
```
Version number of the SDK.
