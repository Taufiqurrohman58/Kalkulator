import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from "react-native";

export default function App() {
  const [resultText, setResultText] = useState("");
  const [calcText, setCalcText] = useState("");

  const replaceOperatorsForDisplay = (text) => {
    return text.replace(/\*/g, "×").replace(/\//g, "÷");
  };

  const replaceOperatorsForCalculation = (text) => {
    return text.replace(/×/g, "*").replace(/÷/g, "/");
  };

  const replaceCommaForDisplay = (text) => {
    return text.replace(/\./g, ",");
  };

  const replaceCommaForCalculation = (text) => {
    return text.replace(/,/g, ".");
  };

  const onButtonClick = (text) => {
    if (text === "=") {
      return calculateResult();
    } else if (text === "00") {
      setResultText(resultText + "00");
    } else if (text === "%") {
      setResultText(resultText + "%");
    } else {
      setResultText(resultText + text);
    }
  };

  const calculateResult = () => {
    try {
      let expression = replaceOperatorsForCalculation(replaceCommaForCalculation(resultText)).replace(/%/g, "/100");

      expression = expression.replace(/√(\d+(\.\d+)?)/g, (match, number) => `Math.sqrt(${number})`);

      expression = expression.replace(/\^/g, "**");

      setCalcText(eval(expression).toString().replace(/\./g, ","));
    } catch (e) {
      setCalcText("Error");
    }
  };

  const onOperationClick = (operation) => {
    let operations = ["DEL", "+", "-", "*", "/", "%", "^", "√"];
    if (operation === "DEL") {
      return setResultText(
        resultText.toString().substring(0, resultText.length - 1)
      );
    }
    if (operation === "AC") {
      setResultText("");
      setCalcText("");
      return;
    }
    if (operations.includes(resultText.toString().slice(-1))) return;
    setResultText(resultText + operation);
  };

  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.calculationText}>
          {replaceOperatorsForDisplay(replaceCommaForDisplay(resultText))}
        </Text>
      </View>
      <View style={styles.calculation}>
        <Text style={styles.resultText}>{calcText}</Text>
      </View>
      <View style={styles.buttons}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.numbersAndOperation}>
            <View style={styles.row}>
              <TouchableOpacity 
                onPress={() => onOperationClick("AC")} 
                style={styles.btn}>
                <Text style={styles.operationButton}>C</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => onButtonClick("%")}
                style={styles.btn}>
                <Text style={styles.operationButton}>%</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => onOperationClick("DEL")}
                style={styles.btn}>
                <Text style={styles.operationButton}>⌫</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => onOperationClick("/")}
                style={styles.btn}>
                <Text style={styles.operationButton}>÷</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.row}>
              <TouchableOpacity
                onPress={() => onButtonClick(7)}
                style={styles.btn}>
                <Text style={styles.number}>7</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => onButtonClick(8)}
                style={styles.btn}>
                <Text style={styles.number}>8</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => onButtonClick(9)}
                style={styles.btn}>
                <Text style={styles.number}>9</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => onOperationClick("*")}
                style={styles.btn}>
                <Text style={styles.operationButton}>×</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.row}>
              <TouchableOpacity
                onPress={() => onButtonClick(4)}
                style={styles.btn}>
                <Text style={styles.number}>4</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => onButtonClick(5)}
                style={styles.btn}>
                <Text style={styles.number}>5</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => onButtonClick(6)}
                style={styles.btn}>
                <Text style={styles.number}>6</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => onOperationClick("+")}
                style={styles.btn}>
                <Text style={styles.operationButton}>+</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.row}>
              <TouchableOpacity
                onPress={() => onButtonClick(1)}
                style={styles.btn}>
                <Text style={styles.number}>1</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => onButtonClick(2)}
                style={styles.btn}>
                <Text style={styles.number}>2</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => onButtonClick(3)}
                style={styles.btn}>
                <Text style={styles.number}>3</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => onOperationClick("-")}
                style={styles.btn}>
                <Text style={styles.operationButton}>-</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.row}>
              <TouchableOpacity
                onPress={() => onButtonClick("00")}
                style={styles.btn}>
                <Text style={styles.number}>00</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => onButtonClick(0)}
                style={styles.btn}>
                <Text style={styles.number}>0</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => onButtonClick(".")}
                style={styles.btn}>
                <Text style={styles.number}>,</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => onButtonClick("=")}
                style={styles.btn}>
                <Text style={styles.operationButton}>=</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.row}>
              <TouchableOpacity
                onPress={() => onOperationClick("(")}
                style={styles.btn}>
                <Text style={styles.operationButton}>(</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => onOperationClick(")")}
                style={styles.btn}>
                <Text style={styles.operationButton}>)</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => onOperationClick("^")}
                style={styles.btn}>
                <Text style={styles.operationButton}>^</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => onOperationClick("√")}
                style={styles.btn}>
                <Text style={styles.operationButton}>√</Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  result: {
    flex: 2,
    backgroundColor: "black",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },

  resultText: {
    fontSize: 30,
    color: "white",
  },

  calculationText: {
    fontSize: 25,
    color: "grey",
    fontWeight: "bold",
  },

  number: {
    fontSize: 25,
    color: "white",
  },

  calculation: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "flex-end",
  },

  btn: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: 'transparent',
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
    alignSelf: "stretch",
  },

  buttons: {
    flex: 4,
    flexDirection: "row",
  },

  scrollView: {
    flex: 1,
    backgroundColor: "#17171C",
  },

  numbersAndOperation: {
    flex: 1,
  },

  row: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },

  operationButton: {
    fontSize: 25,
    color: "#009E5E",
  },
});
