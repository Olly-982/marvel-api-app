import { StyleSheet } from "react-native";

const primary = "#ed1d24";
const marvelYellow = "#FFD602";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain",
  },
  statbar: {
    height: 40,
    backgroundColor: primary,
  },
  bgImage: {
    width: "100%",
    height: "100%",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    width: "80%",
    backgroundColor: "white",
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    alignSelf: "center",
    paddingHorizontal: 40,
    backgroundColor: primary,
  },
  buttonOpen: {
    backgroundColor: primary,
  },
  buttonClose: {
    backgroundColor: primary,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    lineHeight: 25,
    fontFamily: "Comic_Book",
  },
  characterTitle: {
    color: "#FFD602",
    fontFamily: "Comic_Book",
    paddingLeft: 10,
    marginTop: -10,
  },
  characterDesc: {
    backgroundColor: marvelYellow,
    textAlign: "center",
    paddingHorizontal: 8,
    paddingVertical: 10,
    color: primary,
    fontFamily: "Comic_Book",
    fontSize: 20,
  },
  appButton: {
    width: 100,
    // marginLeft: "auto",
    // backgroundColor: primary,
    fontFamily: "Comic_Book",
    fontSize: 20,
    color: marvelYellow,
    textAlign: "center",
    paddingVertical: 10,
  },
});
