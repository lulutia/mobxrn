/**
 * Created by yuebin on 16/2/19.
 */

import {StyleSheet, Colors} from 'tools';

let CStyle = StyleSheet.create({

  // 布局
  container: {
    flex: 1,
    backgroundColor: Colors.bg
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  flexCol: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  flex: {
    flex: 1
  },
  flex_2: {
    flex: 2
  },
  flex_3: {
    flex: 3
  },
  flex_4: {
    flex: 4
  },
  flex_5: {
    flex: 5
  },
  mt_5: {
    marginTop: 5
  },
  mt_10: {
    marginTop: 10
  },
  mt_20: {
    marginTop: 20
  },
  mt_30: {
    marginTop: 30
  },
  ml_5: {
    marginLeft: 5
  },
  ml_10: {
    marginLeft: 10
  },
  ml_20: {
    marginLeft: 20
  },
  mr_5: {
    marginRight: 5
  },
  mr_10: {
    marginRight: 10
  },
  mr_20: {
    marginRight: 20
  },
  pt_5: {
    paddingTop: 5
  },
  pt_10: {
    paddingTop: 10
  },
  pt_20: {
    paddingTop: 20
  },
  pt_30: {
    paddingTop: 30
  },
  pb_5: {
    paddingBottom: 5
  },
  pb_10: {
    paddingBottom: 10
  },
  pb_20: {
    paddingBottom: 20
  },
  pb_30: {
    paddingBottom: 30
  },

  // Text
  baseText: {
    fontSize: 13,
    color: Colors.font
  },
  subText: {
    fontSize: 13,
    color: Colors.subFont
  },
  font_11: {
    fontSize: 11
  },
  font_12: {
    fontSize: 12
  },
  // default fontSize: 13
  font_13: {
    fontSize: 13
  },
  font_14: {
    fontSize: 14
  },
  font_15: {
    fontSize: 15
  },
  font_16: {
    fontSize: 16
  },
  font_18: {
    fontSize: 18
  },
  color_red: {
    color: Colors.red
  },
  color_blue: {
    color: Colors.blue
  },
  color_yellow: {
    color: Colors.yellow
  },
  color_green: {
    color: Colors.green
  },

  // bordr
  bt: {
    borderTopWidth: 1,
    borderTopColor: Colors.border
  },
  btl: {
    borderTopWidth: 1,
    borderTopColor: Colors.borderLighten
  },
  bb: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.border
  },
  bbl: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderLighten
  },

  // btns
  btn: {
    height: 35,
    margin: 3,
    padding: 8,
    paddingTop: 0,
    paddingBottom: 0,
    borderWidth: 1,
    justifyContent: 'center'
  },
  btnText: {
    fontSize: 15,
    color: '#fff',
    textAlign: 'center'
  },
  btnDefault: {
    backgroundColor: Colors.gray,
    borderColor: Colors.grayDeepen
  }
});

export default CStyle;
