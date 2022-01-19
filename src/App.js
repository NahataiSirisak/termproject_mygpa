import { useState, useRef, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import QuotationTable from "./QuotationTable";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import useLocalStorage from "react-localstorage-hook";

function App() {
  const itemRef = useRef();
  const ppuRef = useRef();
  const qtyRef = useRef();
  const disRef = useRef();

  const [dataItems, setDataItems] = useLocalStorage("dataItems", []);

  const dummyProductList = [
    { id: "p001", name: "Apple", price: 10 },
    { id: "p002", name: "Banana", price: 15 },
    { id: "p003", name: "Guava", price: 20 },
    { id: "p004", name: "Orange", price: 30 },
    { id: "p005", name: "Strawberry", price: 50 }
  ];

  const addItem = () => {
    if (itemRef.current.value == "" || ppuRef.current.value == "" || qtyRef.current.value == "" || disRef.current.value == "") {
      alert("Required Input is empty");
      return;
    }
    const pid = itemRef.current.value
    const product = dummyProductList.find(e => e.id === pid)

    var itemObj = {
      pid: pid,
      item: product.name,
      ppu: ppuRef.current.value,
      qty: qtyRef.current.value,
      dis: disRef.current.value
    };


    if (parseInt(disRef.current.value, 10) > (parseInt(ppuRef.current.value, 10) * parseInt(qtyRef.current.value, 10))) {
      alert("The discount is more than the total price, please re-enter ")
      return;
    } else {
      const found = dataItems.some(e => e.pid === itemObj.pid);
      if (!found) {
        dataItems.push(itemObj);
        setDataItems([...dataItems]);


      } else {
        var index = dataItems.findIndex((obj => obj.pid == itemObj.pid));
        dataItems[index].qty = parseInt(dataItems[index].qty, 10) + parseInt(qtyRef.current.value, 10);
        dataItems[index].dis = parseInt(dataItems[index].dis, 10) + parseInt(disRef.current.value, 10);
        setDataItems([...dataItems]);

      }

    }
  };

  const productChange = (e) => {
    const pid = itemRef.current.value;
    const product = dummyProductList.find((e) => e.id === pid);
    ppuRef.current.value = product.price
  }

  const options = dummyProductList.map(v => {
    return <option value={v.id} key={v.id}>{v.name}</option>
  })

  return (
    <Container>
      <Row>
        <Col xs={5} style={{ backgroundColor: "#eaeaea" }}>
          <Form>
            <Form.Group className="mb-3" controlId="formItem">
              <Form.Label>Item</Form.Label>
              <Form.Select aria-label="Default select example" ref={itemRef} onChange={productChange}>
                {options}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" placeholder="Price Per Unit" ref={ppuRef} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formQauntity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control type="number" placeholder="Quantity" ref={qtyRef} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDiscount">
              <Form.Label>Discount</Form.Label>
              <Form.Control type="number" placeholder="Discount" ref={disRef} />
            </Form.Group>

            {/* <Button variant="outline-dark" size="lg" onClick={addItem}> */}
            <div className="d-grid gap-2">
            <Button variant="primary" size="lg" onClick={addItem}>
              Add
            </Button>
            </div>
          </Form>

        </Col>
        <Col>
          <QuotationTable data={dataItems} setDataItems={setDataItems} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
