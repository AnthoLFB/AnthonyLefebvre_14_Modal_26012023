import React from 'react';

var closeBtn = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCI+DQogICAgPHBhdGggZD0iTSAyNSAyIEMgMTIuMzA5NTM0IDIgMiAxMi4zMDk1MzQgMiAyNSBDIDIgMzcuNjkwNDY2IDEyLjMwOTUzNCA0OCAyNSA0OCBDIDM3LjY5MDQ2NiA0OCA0OCAzNy42OTA0NjYgNDggMjUgQyA0OCAxMi4zMDk1MzQgMzcuNjkwNDY2IDIgMjUgMiB6IE0gMjUgNCBDIDM2LjYwOTUzNCA0IDQ2IDEzLjM5MDQ2NiA0NiAyNSBDIDQ2IDM2LjYwOTUzNCAzNi42MDk1MzQgNDYgMjUgNDYgQyAxMy4zOTA0NjYgNDYgNCAzNi42MDk1MzQgNCAyNSBDIDQgMTMuMzkwNDY2IDEzLjM5MDQ2NiA0IDI1IDQgeiBNIDMyLjk5MDIzNCAxNS45ODYzMjggQSAxLjAwMDEgMS4wMDAxIDAgMCAwIDMyLjI5Mjk2OSAxNi4yOTI5NjkgTCAyNSAyMy41ODU5MzggTCAxNy43MDcwMzEgMTYuMjkyOTY5IEEgMS4wMDAxIDEuMDAwMSAwIDAgMCAxNi45OTAyMzQgMTUuOTkwMjM0IEEgMS4wMDAxIDEuMDAwMSAwIDAgMCAxNi4yOTI5NjkgMTcuNzA3MDMxIEwgMjMuNTg1OTM4IDI1IEwgMTYuMjkyOTY5IDMyLjI5Mjk2OSBBIDEuMDAwMSAxLjAwMDEgMCAxIDAgMTcuNzA3MDMxIDMzLjcwNzAzMSBMIDI1IDI2LjQxNDA2MiBMIDMyLjI5Mjk2OSAzMy43MDcwMzEgQSAxLjAwMDEgMS4wMDAxIDAgMSAwIDMzLjcwNzAzMSAzMi4yOTI5NjkgTCAyNi40MTQwNjIgMjUgTCAzMy43MDcwMzEgMTcuNzA3MDMxIEEgMS4wMDAxIDEuMDAwMSAwIDAgMCAzMi45OTAyMzQgMTUuOTg2MzI4IHoiPjwvcGF0aD4NCjwvc3ZnPg==';

var warningLogo = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPg0KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xMiAxNi45OVYxN00xMiA3VjE0TTIxIDEyQzIxIDE2Ljk3MDYgMTYuOTcwNiAyMSAxMiAyMUM3LjAyOTQ0IDIxIDMgMTYuOTcwNiAzIDEyQzMgNy4wMjk0NCA3LjAyOTQ0IDMgMTIgM0MxNi45NzA2IDMgMjEgNy4wMjk0NCAyMSAxMloiIHN0cm9rZT0iIzkwNjIwMCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPC9zdmc+';

var informativeLogo = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjgwMHB4IiBoZWlnaHQ9IjgwMHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+DQogICAgPHRpdGxlPmluZm9ybWF0aW9uX2xpbmU8L3RpdGxlPg0KICAgIDxnIGlkPSLpobXpnaItMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICAgIDxnIGlkPSJTeXN0ZW0iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02NzIuMDAwMDAwLCAwLjAwMDAwMCkiIGZpbGwtcnVsZT0ibm9uemVybyI+DQogICAgICAgICAgICA8ZyBpZD0iaW5mb3JtYXRpb25fbGluZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjcyLjAwMDAwMCwgMC4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjQsMCBMMjQsMjQgTDAsMjQgTDAsMCBMMjQsMCBaIE0xMi41OTM0OTAxLDIzLjI1Nzg0MSBMMTIuNTgxOTQwMiwyMy4yNTk1MTMxIEwxMi41MTA4Nzc3LDIzLjI5NTA0MzkgTDEyLjQ5MTg3OTEsMjMuMjk4NzQ2OSBMMTIuNDkxODc5MSwyMy4yOTg3NDY5IEwxMi40NzY3MTUyLDIzLjI5NTA0MzkgTDEyLjQwNTY1NDgsMjMuMjU5NTEzMSBDMTIuMzk1ODIyOSwyMy4yNTYzNjYyIDEyLjM4NzA0OTMsMjMuMjU5MDIzNSAxMi4zODIxNDIxLDIzLjI2NDkwNzQgTDEyLjM3ODAzMjMsMjMuMjc1ODMxIEwxMi4zNjA5NDEsMjMuNzAzMTA5NyBMMTIuMzY1ODk0NywyMy43MjM0OTk0IEwxMi4zNzY5MDQ4LDIzLjczNTcxMzkgTDEyLjQ4MDQ3NzcsMjMuODA5NjkzMSBMMTIuNDk1MzQ5MSwyMy44MTM2MTM0IEwxMi40OTUzNDkxLDIzLjgxMzYxMzQgTDEyLjUwNzExNTIsMjMuODA5NjkzMSBMMTIuNjEwNjkwMiwyMy43MzU3MTM5IEwxMi42MjMyOTM4LDIzLjcxOTY3MzMgTDEyLjYyMzI5MzgsMjMuNzE5NjczMyBMMTIuNjI2NjUyNywyMy43MDMxMDk3IEwxMi42MDk1NjEsMjMuMjc1ODMxIEMxMi42MDc1NzI0LDIzLjI2NTcwMTMgMTIuNjAxMDExMiwyMy4yNTkyOTkzIDEyLjU5MzQ5MDEsMjMuMjU3ODQxIEwxMi41OTM0OTAxLDIzLjI1Nzg0MSBaIE0xMi44NTgzOTA2LDIzLjE0NTI4NjIgTDEyLjg0NDU0ODUsMjMuMTQ3MzA3MiBMMTIuNjU5ODQ0MywyMy4yMzk2NTk3IEwxMi42NDk4ODIyLDIzLjI0OTkwNTIgTDEyLjY0OTg4MjIsMjMuMjQ5OTA1MiBMMTIuNjQ3MTk0MywyMy4yNjExMTE0IEwxMi42NjUwOTQzLDIzLjY5MDYzODkgTDEyLjY2OTkzNDksMjMuNzAzNDE3OCBMMTIuNjY5OTM0OSwyMy43MDM0MTc4IEwxMi42NzgzODYsMjMuNzEwNDkzMSBMMTIuODc5MzQwMiwyMy44MDMyMzg5IEMxMi44OTE0Mjg1LDIzLjgwNjg5OTkgMTIuOTAyMjMzMywyMy44MDI5ODc1IDEyLjkwNzgyODYsMjMuNzk1MjI2NCBMMTIuOTExODIzNSwyMy43ODExNjM5IEwxMi44Nzc2Nzc3LDIzLjE2NjUzMzEgQzEyLjg3NTI4ODIsMjMuMTU0NTg5NyAxMi44Njc0MTAyLDIzLjE0NzAwMTYgMTIuODU4MzkwNiwyMy4xNDUyODYyIEwxMi44NTgzOTA2LDIzLjE0NTI4NjIgWiBNMTIuMTQzMDQ3MywyMy4xNDczMDcyIEMxMi4xMzMyMTc4LDIzLjE0MjM5MjUgMTIuMTIyMTc2MywyMy4xNDUyNjA2IDEyLjExNTYzNjUsMjMuMTUyNTk1NCBMMTIuMTA5OTE3MywyMy4xNjY1MzMxIEwxMi4wNzU3NzE0LDIzLjc4MTE2MzkgQzEyLjA3NTEzMjMsMjMuNzkyNjYzOSAxMi4wODI4MDk5LDIzLjgwMTg2MDIgMTIuMDkyNjQ4MSwyMy44MDQ1Njc2IEwxMi4xMDgyNTYsMjMuODAzMjM4OSBMMTIuMzA5MjEwNiwyMy43MTA0OTMxIEwxMi4zMTg2NDk3LDIzLjcwMjQzNDcgTDEyLjMxODY0OTcsMjMuNzAyNDM0NyBMMTIuMzIyNTA0MywyMy42OTA2Mzg5IEwxMi4zNDA0MDEsMjMuMjYxMTExNCBMMTIuMzM3MjQ1LDIzLjI0ODUxNzYgTDEyLjMzNzI0NSwyMy4yNDg1MTc2IEwxMi4zMjc3NTMxLDIzLjIzOTY1OTcgTDEyLjE0MzA0NzMsMjMuMTQ3MzA3MiBaIiBpZD0iTWluZ0N1dGUiIGZpbGwtcnVsZT0ibm9uemVybyI+DQoNCjwvcGF0aD4NCiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTIsMiBDMTcuNTIyOCwyIDIyLDYuNDc3MTUgMjIsMTIgQzIyLDE3LjUyMjggMTcuNTIyOCwyMiAxMiwyMiBDNi40NzcxNSwyMiAyLDE3LjUyMjggMiwxMiBDMiw2LjQ3NzE1IDYuNDc3MTUsMiAxMiwyIFogTTEyLDQgQzcuNTgxNzIsNCA0LDcuNTgxNzIgNCwxMiBDNCwxNi40MTgzIDcuNTgxNzIsMjAgMTIsMjAgQzE2LjQxODMsMjAgMjAsMTYuNDE4MyAyMCwxMiBDMjAsNy41ODE3MiAxNi40MTgzLDQgMTIsNCBaIE0xMS45OSwxMCBDMTIuNTQ3OCwxMCAxMywxMC40NTIyIDEzLDExLjAxIEwxMywxNi4xMzM4IEMxMy4yOTg5LDE2LjMwNjcgMTMuNSwxNi42Mjk5IDEzLjUsMTcgQzEzLjUsMTcuNTUyMyAxMy4wNTIzLDE4IDEyLjUsMTggTDEyLjAxLDE4IEMxMS40NTIxLDE4IDExLDE3LjU0NzggMTEsMTYuOTkgTDExLDEyIEMxMC40NDc3LDEyIDEwLDExLjU1MjMgMTAsMTEgQzEwLDEwLjQ0NzcgMTAuNDQ3NywxMCAxMSwxMCBMMTEuOTksMTAgWiBNMTIsNyBDMTIuNTUyMyw3IDEzLDcuNDQ3NzIgMTMsOCBDMTMsOC41NTIyOCAxMi41NTIzLDkgMTIsOSBDMTEuNDQ3Nyw5IDExLDguNTUyMjggMTEsOCBDMTEsNy40NDc3MiAxMS40NDc3LDcgMTIsNyBaIiBpZD0i5b2i54q2IiBmaWxsPSIjMGI1MDhmIj4NCg0KPC9wYXRoPg0KICAgICAgICAgICAgPC9nPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+';

var errorLogo = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQoNCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQoNCjxzdmcgZmlsbD0iIzkzMWExMCIgd2lkdGg9IjgwMHB4IiBoZWlnaHQ9IjgwMHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6c2VyaWY9Imh0dHA6Ly93d3cuc2VyaWYuY29tLyIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyOyI+DQoNCjxyZWN0IGlkPSJJY29ucyIgeD0iLTcwNCIgeT0iLTY0IiB3aWR0aD0iMTI4MCIgaGVpZ2h0PSI4MDAiIHN0eWxlPSJmaWxsOm5vbmU7Ii8+DQoNCjxnIGlkPSJJY29uczEiIHNlcmlmOmlkPSJJY29ucyI+DQoNCjxnIGlkPSJTdHJpa2UiPg0KDQo8L2c+DQoNCjxnIGlkPSJIMSI+DQoNCjwvZz4NCg0KPGcgaWQ9IkgyIj4NCg0KPC9nPg0KDQo8ZyBpZD0iSDMiPg0KDQo8L2c+DQoNCjxnIGlkPSJsaXN0LXVsIj4NCg0KPC9nPg0KDQo8ZyBpZD0iaGFtYnVyZ2VyLTEiPg0KDQo8L2c+DQoNCjxnIGlkPSJoYW1idXJnZXItMiI+DQoNCjwvZz4NCg0KPGcgaWQ9Imxpc3Qtb2wiPg0KDQo8L2c+DQoNCjxnIGlkPSJsaXN0LXRhc2siPg0KDQo8L2c+DQoNCjxnIGlkPSJ0cmFzaCI+DQoNCjwvZz4NCg0KPGcgaWQ9InZlcnRpY2FsLW1lbnUiPg0KDQo8L2c+DQoNCjxnIGlkPSJob3Jpem9udGFsLW1lbnUiPg0KDQo8L2c+DQoNCjxnIGlkPSJzaWRlYmFyLTIiPg0KDQo8L2c+DQoNCjxnIGlkPSJQZW4iPg0KDQo8L2c+DQoNCjxnIGlkPSJQZW4xIiBzZXJpZjppZD0iUGVuIj4NCg0KPC9nPg0KDQo8ZyBpZD0iY2xvY2siPg0KDQo8L2c+DQoNCjxnIGlkPSJleHRlcm5hbC1saW5rIj4NCg0KPC9nPg0KDQo8ZyBpZD0iaHIiPg0KDQo8L2c+DQoNCjxnIGlkPSJpbmZvIj4NCg0KPC9nPg0KDQo8ZyBpZD0id2FybmluZyI+DQoNCjwvZz4NCg0KPHBhdGggaWQ9ImVycm9yLWNpcmNsZSIgZD0iTTMyLjA4NSw1Ni4wNThjNi4xNjUsLTAuMDU5IDEyLjI2OCwtMi42MTkgMTYuNjU3LC02Ljk2NmM1LjIxMywtNS4xNjQgNy44OTcsLTEyLjgwMyA2Ljk2MSwtMjAuMDk2Yy0xLjYwNSwtMTIuNDk5IC0xMS44NTUsLTIwLjk4IC0yMy43NzIsLTIwLjk4Yy05LjA1MywwIC0xNy44NTMsNS42NzcgLTIxLjcxMywxMy45MDljLTIuOTU1LDYuMzAyIC0yLjk2LDEzLjkxMSAwLDIwLjIyNWMzLjgzMiw4LjE3NCAxMi40ODgsMTMuODIxIDIxLjU1OSwxMy45MDhjMC4xMDMsMC4wMDEgMC4yMDUsMC4wMDEgMC4zMDgsMFptLTAuMjgyLC00LjAwM2MtOS4yMDgsLTAuMDg5IC0xNy43OTksLTcuMjI3IC0xOS41MDgsLTE2LjM3OGMtMS4yMDQsLTYuNDUyIDEuMDcsLTEzLjQzMyA1LjgwNSwtMTguMDE1YzUuNTMsLTUuMzUgMTQuMjIsLTcuMTQzIDIxLjQ0NSwtNC4xMWM2LjQ2NiwyLjcxNCAxMS4zMDQsOS4wMTQgMTIuMTk2LDE1Ljk1NWMwLjc2NCw1Ljk0OSAtMS4zNjYsMTIuMTg0IC01LjU1MSwxNi40OGMtMy42NzIsMy43NjcgLTguODIsNi4wMTYgLTE0LjEzMSw2LjA2OGMtMC4wODUsMCAtMC4xNzEsMCAtMC4yNTYsMFptLTEyLjM4MiwtMTAuMjlsOS43MzQsLTkuNzM0bC05Ljc0NCwtOS43NDRsMi44MDQsLTIuODAzbDkuNzQ0LDkuNzQ0bDEwLjA3OCwtMTAuMDc4bDIuODA4LDIuODA3bC0xMC4wNzgsMTAuMDc5bDEwLjA5OCwxMC4wOThsLTIuODAzLDIuODA0bC0xMC4wOTksLTEwLjA5OWwtOS43MzQsOS43MzRsLTIuODA4LC0yLjgwOFoiLz4NCg0KPGcgaWQ9InBsdXMtY2lyY2xlIj4NCg0KPC9nPg0KDQo8ZyBpZD0ibWludXMtY2lyY2xlIj4NCg0KPC9nPg0KDQo8ZyBpZD0idnVlIj4NCg0KPC9nPg0KDQo8ZyBpZD0iY29nIj4NCg0KPC9nPg0KDQo8ZyBpZD0ibG9nbyI+DQoNCjwvZz4NCg0KPGcgaWQ9InJhZGlvLWNoZWNrIj4NCg0KPC9nPg0KDQo8ZyBpZD0iZXllLXNsYXNoIj4NCg0KPC9nPg0KDQo8ZyBpZD0iZXllIj4NCg0KPC9nPg0KDQo8ZyBpZD0idG9nZ2xlLW9mZiI+DQoNCjwvZz4NCg0KPGcgaWQ9InNocmVkZGVyIj4NCg0KPC9nPg0KDQo8ZyBpZD0ic3Bpbm5lci0tbG9hZGluZy0tZG90cy0iIHNlcmlmOmlkPSJzcGlubmVyIFtsb2FkaW5nLCBkb3RzXSI+DQoNCjwvZz4NCg0KPGcgaWQ9InJlYWN0Ij4NCg0KPC9nPg0KDQo8ZyBpZD0iY2hlY2stc2VsZWN0ZWQiPg0KDQo8L2c+DQoNCjxnIGlkPSJ0dXJuLW9mZiI+DQoNCjwvZz4NCg0KPGcgaWQ9ImNvZGUtYmxvY2siPg0KDQo8L2c+DQoNCjxnIGlkPSJ1c2VyIj4NCg0KPC9nPg0KDQo8ZyBpZD0iY29mZmVlLWJlYW4iPg0KDQo8L2c+DQoNCjxnIGlkPSJjb2ZmZWUtYmVhbnMiPg0KDQo8ZyBpZD0iY29mZmVlLWJlYW4xIiBzZXJpZjppZD0iY29mZmVlLWJlYW4iPg0KDQo8L2c+DQoNCjwvZz4NCg0KPGcgaWQ9ImNvZmZlZS1iZWFuLWZpbGxlZCI+DQoNCjwvZz4NCg0KPGcgaWQ9ImNvZmZlZS1iZWFucy1maWxsZWQiPg0KDQo8ZyBpZD0iY29mZmVlLWJlYW4yIiBzZXJpZjppZD0iY29mZmVlLWJlYW4iPg0KDQo8L2c+DQoNCjwvZz4NCg0KPGcgaWQ9ImNsaXBib2FyZCI+DQoNCjwvZz4NCg0KPGcgaWQ9ImNsaXBib2FyZC1wYXN0ZSI+DQoNCjwvZz4NCg0KPGcgaWQ9ImNsaXBib2FyZC1jb3B5Ij4NCg0KPC9nPg0KDQo8ZyBpZD0iTGF5ZXIxIj4NCg0KPC9nPg0KDQo8L2c+DQoNCjwvc3ZnPg==';

var successLogo = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPg0KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xNyA5TDkuOTk5OTggMTZMNi45OTk5NCAxM00yMSAxMkMyMSAxNi45NzA2IDE2Ljk3MDYgMjEgMTIgMjFDNy4wMjk0NCAyMSAzIDE2Ljk3MDYgMyAxMkMzIDcuMDI5NDQgNy4wMjk0NCAzIDEyIDNDMTYuOTcwNiAzIDIxIDcuMDI5NDQgMjEgMTJaIiBzdHJva2U9IiM0MDVkMmEiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4NCjwvc3ZnPg==';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$1 = ".no-scroll-modal{overflow:hidden}.modal-container{background-color:rgba(39,39,39,.5);border:0;height:100vh;justify-content:center;left:0;margin:0;padding:0;position:fixed;top:0;user-select:none;width:100%;z-index:9999}.modal,.modal-container{align-items:center;display:flex}.modal{border-radius:15px;flex-direction:column;gap:25px;margin:0 25px;max-width:650px;overflow:hidden;width:calc(100% - 50px)}.modal>div{align-items:center;display:flex;flex-direction:row;justify-content:center}.modal>div:not(.modal__header){margin:0 2em;width:calc(100% - 4em)}.modal__header{border-top-left-radius:15px;border-top-right-radius:15px;justify-content:center;min-height:55px;padding:0 15px;position:relative;width:calc(100% - 30px)}.modal__header__closeBtn{background:transparent;border:0;cursor:pointer;margin:0;padding:0;position:absolute;right:15px}.modal__header__closeBtn,.modal__header__closeBtn__img{height:35px;width:35px}.modal__header__title{font-size:20px;letter-spacing:1px;text-transform:uppercase}.modal__main-content{gap:25px}.modal__main-content__icon{height:100px;margin:0;padding:0;width:100px}.modal__main-content__title{font-size:24px;text-align:center}.modal__main-content__message{font-size:16px;letter-spacing:.8px;text-align:justify}.modal__closeBtn{border:1px solid;border-radius:5px;margin:0 1em 25px;max-width:150px;padding:10px;width:calc(100% - 2em)}.modal__closeBtn:hover{color:#fff}.modal--warning{background-color:#fdf8e3;border:2px solid #ffd069}.modal--informative{background-color:#d9edf6;border:2px solid #8ec4f6}.modal--success{background-color:#def0d8;border:2px solid #a6ca8a}.modal--error{background-color:#f2dedf;border:2px solid #f5aca6}.modal__header--warning{background-color:#ffd069;color:#906200}.modal__header--informative{background-color:#8ec4f6;color:#0b508f}.modal__header--success{background-color:#a6ca8a;color:#405d2a}.modal__header--error{background-color:#f5aca6;color:#931a10}.modal__closeBtn--warning{background-color:#fdf8e3;border-color:#ffd069;color:#906200}.modal__closeBtn--informative{background-color:#d9edf6;border-color:#8ec4f6;color:#0b508f}.modal__closeBtn--success{background-color:#def0d8;border-color:#a6ca8a;color:#405d2a}.modal__closeBtn--error{background-color:#f2dedf;border-color:#f5aca6;color:#931a10}.modal__closeBtn--warning:hover{background-color:#ffd069}.modal__closeBtn--informative:hover{background-color:#8ec4f6}.modal__closeBtn--success:hover{background-color:#a6ca8a}.modal__closeBtn--error:hover{background-color:#f5aca6}";
styleInject(css_248z$1);

var css_248z = "@media (max-width:576px){.modal>div{flex-direction:column}.modal__main-content__title{border-bottom:3px solid #405d2a;padding-bottom:25px}}";
styleInject(css_248z);

//React
function Modal({
  isOpen,
  setIsOpen,
  isScrollable,
  type,
  iconToDisplay,
  title,
  message
}) {
  //Display of a default icon if the modal belongs to a predefined type and no icon is specified.
  const icon = iconToDisplay ?? getDefaultIcons(type);

  //Allows to close the modal when clicking on the button and restores the possibility to scroll if it was blocked.
  const closeModal = () => {
    setIsOpen(false);
    if (isScrollable == false) {
      enableScroll();
    }
  };

  //If the modal is open then the content of the modal is returned.
  if (isOpen) {
    //Disable the scroll if the user wants it.
    if (isScrollable == false) {
      disableScroll();
    }
    return /*#__PURE__*/React.createElement("section", {
      className: "modal-container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "modal modal--" + type
    }, /*#__PURE__*/React.createElement("div", {
      className: "modal__header modal__header--" + type
    }, /*#__PURE__*/React.createElement("h2", {
      className: "modal__header__title"
    }, type), /*#__PURE__*/React.createElement("button", {
      className: "modal__header__closeBtn",
      onClick: () => closeModal()
    }, /*#__PURE__*/React.createElement("img", {
      className: "modal__header__closeBtn__img",
      src: closeBtn,
      alt: "Fermer"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "modal__main-content"
    }, /*#__PURE__*/React.createElement("img", {
      className: "modal__main-content__icon",
      src: icon,
      alt: "Icone"
    }), /*#__PURE__*/React.createElement("h1", {
      className: "modal__main-content__title"
    }, title)), /*#__PURE__*/React.createElement("div", {
      className: "modal__main-content"
    }, /*#__PURE__*/React.createElement("p", {
      className: "modal__main-content__message"
    }, message)), /*#__PURE__*/React.createElement("button", {
      className: 'modal__closeBtn modal__closeBtn--' + type,
      onClick: () => closeModal()
    }, "Fermer")));
  }
}

//Allows to set the default icons to be displayed for the predefined types.
function getDefaultIcons(type) {
  let defaultIcon;
  switch (type) {
    case 'warning':
      defaultIcon = warningLogo;
      break;
    case 'informative':
      defaultIcon = informativeLogo;
      break;
    case 'success':
      defaultIcon = successLogo;
      break;
    case 'error':
      defaultIcon = errorLogo;
      break;
    default:
      return defaultIcon;
  }
  return defaultIcon;
}
function enableScroll() {
  var body = document.getElementsByTagName("body")[0];
  body.classList.remove("no-scroll-modal");
}
function disableScroll() {
  var body = document.getElementsByTagName("body")[0];
  body.classList.add("no-scroll-modal");
}

export { Modal };
