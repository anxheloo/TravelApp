import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";
import React, { useState } from "react";
import { COLORS, SIZES } from "../../constants/theme";
import { Formik } from "formik";
import * as Yup from "yup";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import WidthSpacer from "../../components/Reusable/WidthSpacer";
import { TouchableOpacity } from "react-native";
import HeightSpacer from "../../components/Reusable/HeightSpacer";
import ReusableBtn from "../../components/Buttons/ReusableBtn";

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Required"),

  email: Yup.string().email("Provide a valid email").required("Required"),
});

const Signin = ({ navigation }) => {
  // const [email,setEmail] = useState("")
  // const [password,setPassword] = useState("")

  const [loader, setLoader] = useState(false);
  const [response, setResponse] = useState(null);
  const [obsecureText, setObsecureText] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(value) => {
          console.log(value);
        }}
      >
        {({
          handleChange,
          touched,
          handleSubmit,
          values,
          errors,
          isValid,
          setFieldTouched,
        }) => (
          <View>
            <View style={{ marginBottom: 20 }}>
              <Text style={styles.label}>Email</Text>
              <View
                style={styles.inputWrapper(
                  touched.email ? COLORS.lightBlue : COLORS.gray
                )}
              >
                <MaterialCommunityIcons
                  name="email-outline"
                  size={20}
                  color={COLORS.gray}
                ></MaterialCommunityIcons>

                <WidthSpacer width={10}></WidthSpacer>

                <TextInput
                  placeholder="Enter email"
                  onFocus={() => setFieldTouched("email")}
                  onBlur={() => setFieldTouched("email", "")}
                  value={values.email}
                  onChangeText={handleChange("email")}
                  autoCapitalize="none"
                  autoCorrect={false}
                  style={{ flex: 1 }}
                ></TextInput>
              </View>

              {touched.email && errors.email && (
                <Text style={styles.errorMsg}>{errors.email}</Text>
              )}
            </View>

            <View style={{ marginBottom: 20 }}>
              <Text style={styles.label}>Password</Text>
              <View
                style={styles.inputWrapper(
                  touched.password ? COLORS.lightBlue : COLORS.gray
                )}
              >
                <MaterialCommunityIcons
                  name="email-outline"
                  size={20}
                  color={COLORS.gray}
                ></MaterialCommunityIcons>

                <WidthSpacer width={10}></WidthSpacer>

                <TextInput
                  placeholder="Enter password"
                  onFocus={() => setFieldTouched("password")}
                  onBlur={() => setFieldTouched("password", "")}
                  value={values.password}
                  onChangeText={handleChange("password")}
                  autoCapitalize="none"
                  autoCorrect={false}
                  style={{ flex: 1 }}
                  secureTextEntry={!obsecureText}
                ></TextInput>

                <WidthSpacer width={10}></WidthSpacer>

                <TouchableOpacity
                  onPress={() => setObsecureText(!obsecureText)}
                >
                  <MaterialCommunityIcons
                    name={obsecureText ? "eye-outline" : "eye-off-outline"}
                    size={20}
                    color={COLORS.gray}
                  ></MaterialCommunityIcons>
                </TouchableOpacity>
              </View>

              {touched.password && errors.password && (
                <Text style={styles.errorMsg}>{errors.password}</Text>
              )}
            </View>

            <HeightSpacer height={30}></HeightSpacer>

            <View style={{ alignItems: "center" }}>
              <ReusableBtn
                onPress={handleSubmit}
                btnText={"SIGN IN"}
                textColor={COLORS.white}
                width={SIZES.width - 50}
                backgroundColor={COLORS.green}
                borderWidth={1}
                borderColor={COLORS.green}
              ></ReusableBtn>
            </View>
          </View>
        )}
      </Formik>

      <HeightSpacer height={200}></HeightSpacer>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.lightWhite,
  },

  inputWrapper: (borderColor) => ({
    borderColor: borderColor,
    backgroundColor: COLORS.lightWhite,
    borderWidth: 2,
    height: 50,
    borderRadius: 12,
    flexDirection: "row",
    paddingHorizontal: 15,
    alignItems: "center",
  }),

  label: {
    fontFamily: "regular",
    fontSize: SIZES.small,
    marginBottom: 5,
    marginEnd: 5,
    textAlign: "right",
  },

  errorMsg: {
    fontFamily: "regular",
    fontSize: SIZES.small,
    marginLeft: 5,
    marginTop: 5,
    // textAlign: "right",
  },
});

export default Signin;
