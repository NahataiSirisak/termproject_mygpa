import { useState, useRef, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import useLocalStorage from "react-localstorage-hook";
import dataCS from "./cs-2019.json"
import React from 'react';
import Select from 'react-select';
import Table1 from "./table1";
import Table2 from "./table2";
import Table3 from "./table3";
import Table4 from "./table4";
import Table5 from "./table5";
import Table6 from "./table6";
import Table7 from "./table7";
import Table8 from "./table8";
import Table9 from "./table9";
import { Line } from "react-chartjs-2"

function App() {

  const subjectNRef = useRef();
  const gradeRef = useRef();
  const semRef = useRef();
  const codeRef = useRef();
  const allgpaRef = useRef();
  const groupRef = useRef();

  const [dataItems, setDataItems] = useLocalStorage("dataItems", []);
  const [dataItems22019, setdataItems22019] = useLocalStorage("dataItems22019", []);
  const [dataItems12020, setdataItems12020] = useLocalStorage("dataItems12020", []);
  const [dataItems22020, setdataItems22020] = useLocalStorage("dataItems22020", []);
  const [dataItems12021, setdataItems12021] = useLocalStorage("dataItems212021", []);
  const [dataItems22021, setdataItems22021] = useLocalStorage("dataItems22021", []);
  const [dataItems32019, setdataItems32019] = useLocalStorage("dataItems32019", []);
  const [dataItems32020, setdataItems32020] = useLocalStorage("dataItems32020", []);
  const [dataItems32021, setdataItems32021] = useLocalStorage("dataItems32021", []);

  const gradeList = [
    { id: "01", grade: "A", num: 4.00 },
    { id: "02", grade: "A-", num: 3.75 },
    { id: "03", grade: "B+", num: 3.25 },
    { id: "04", grade: "B", num: 3.00 },
    { id: "05", grade: "B-", num: 2.75 },
    { id: "06", grade: "C+", num: 2.25 },
    { id: "07", grade: "C", num: 2.00 },
    { id: "08", grade: "C-", num: 1.75 },
    { id: "09", grade: "D", num: 1.00 },
    { id: "10", grade: "F", num: 0 },
    { id: "11", grade: "W,I,S,U,R,TR ", num: 0 }
  ];

  const semesters = [
    { id: "01", term: "1/2019" },
    { id: "02", term: "2/2019" },
    { id: "03", term: "1/2020" },
    { id: "04", term: "2/2020" },
    { id: "05", term: "1/2021" },
    { id: "06", term: "2/2021" },
    { id: "07", term: "3/2019" },
    { id: "08", term: "3/2020" },
    { id: "09", term: "3/2021" }
  ]



  const addItem = () => {
    if (codeRef.current.value == "" || semRef.current.value == "" || gradeRef.current.value == "" || subjectNRef.current.value == "") {
      alert("Required Input is empty");
      return;
    }
    const grd = gradeRef.current.value
    const grade = gradeList.find(e => e.id === grd)
    const semes = semRef.current.value
    const sem = semesters.find(e => e.id === semes)

    var itemObj = {

      sem: sem.term,
      grp: groupRef.current.value,
      code: codeRef.current.value,
      subN: subjectNRef.current.value,
      grd: grade.grade,
      grdn: grade.num

    };


    if (semRef.current.value === "01") {
      dataItems.push(itemObj);
      setDataItems([...dataItems]);
    } else if (semRef.current.value === "02") {
      dataItems22019.push(itemObj);
      setdataItems22019([...dataItems22019]);
    } else if (semRef.current.value === "03") {
      dataItems12020.push(itemObj);
      setdataItems12020([...dataItems12020]);
    } else if (semRef.current.value === "04") {
      dataItems22020.push(itemObj);
      setdataItems22020([...dataItems22020]);
    } else if (semRef.current.value === "05") {
      dataItems12021.push(itemObj);
      setdataItems12021([...dataItems12021]);
    } else if (semRef.current.value === "06") {
      dataItems22021.push(itemObj);
      setdataItems22021([...dataItems22021]);
    } else if (semRef.current.value === "07") {
      dataItems32019.push(itemObj);
      setdataItems32019([...dataItems32019]);
    } else if (semRef.current.value === "08") {
      dataItems32020.push(itemObj);
      setdataItems32020([...dataItems32020]);
    } else {
      dataItems32021.push(itemObj);
      setdataItems32021([...dataItems32021]);
    }

    const leng1 = dataItems.length
    const all1 = (dataItems.reduce((total, currentValue) => total = total + currentValue.grdn, 0))

    const leng2 = dataItems22019.length
    const all2 = (dataItems22019.reduce((total, currentValue) => total = total + currentValue.grdn, 0))

    const leng3 = dataItems12020.length
    const all3 = (dataItems12020.reduce((total, currentValue) => total = total + currentValue.grdn, 0))

    const leng4 = dataItems22020.length
    const all4 = (dataItems22020.reduce((total, currentValue) => total = total + currentValue.grdn, 0))

    const leng5 = dataItems12021.length
    const all5 = (dataItems12021.reduce((total, currentValue) => total = total + currentValue.grdn, 0))

    const leng6 = dataItems22021.length
    const all6 = (dataItems22021.reduce((total, currentValue) => total = total + currentValue.grdn, 0))

    const leng7 = dataItems32019.length
    const all7 = (dataItems32019.reduce((total, currentValue) => total = total + currentValue.grdn, 0))

    const leng8 = dataItems32020.length
    const all8 = (dataItems32020.reduce((total, currentValue) => total = total + currentValue.grdn, 0))

    const leng9 = dataItems32021.length
    const all9 = (dataItems32021.reduce((total, currentValue) => total = total + currentValue.grdn, 0))


    const allgrd = parseFloat(all1, 10) + parseFloat(all2, 10) + parseFloat(all3, 10) + parseFloat(all4, 10) + parseFloat(all5, 10) + parseFloat(all6, 10) + parseFloat(all7, 10) + parseFloat(all8, 10) + parseFloat(all9, 10)
    const alllen = parseInt(leng1, 10) + parseInt(leng2, 10) + parseInt(leng3, 10) + parseInt(leng4, 10) + parseInt(leng5, 10) + parseInt(leng6, 10) + parseInt(leng7, 10) + parseInt(leng8, 10) + parseInt(leng9, 10)
    const all = parseFloat(allgrd / alllen).toFixed(2)

    allgpaRef.current.value = all

  };

  const subjectChange = (e) => {
    const subcode = codeRef.current.value;
    const subs = dataCS.curriculum.subjects.map((item) => {
      return item.subjects.findIndex((e) => e.code === subcode) //return array 0,-1,-1,-1,-1,-1,-1,-1
    });

    const subcodearr = (item) => item > -1;
    const sub1arr = subs.findIndex(subcodearr)

    const i = dataCS.curriculum.subjects[sub1arr].subjects
    const r = dataCS.curriculum.subjects[sub1arr].subjects.findIndex((item) => {
      return item.code === subcode
    })

    const getname = dataCS.curriculum.subjects[sub1arr].subjects[r].name
    subjectNRef.current.value = getname
    // allgpaRef.current.value = 0

  }

  const codechange = (e) => {
    const grp = groupRef.current.value;
    const sub = dataCS.curriculum.subjects.findIndex((e) => e.groupName === grp)


    const subjectOptionA = dataCS.curriculum.subjects[sub].subjects.map((e) => {
      return <option>{e.code}</option>
    })
    return subjectOptionA
  }
  //const subjectOptionA = codechange()

  const gradeOptions = gradeList.map(v => {
    return <option value={v.id} key={v.id}>{v.grade}</option>
  })

  const semesOptions = semesters.map(v => {
    return <option value={v.id} key={v.id}>{v.term}</option>
  })

  //group
  const subjectOption = dataCS.curriculum.subjects.map((item) => {
    return <option>{item.groupName}</option>
  })


  //code in sub-subjects
  const subjectOptionA = dataCS.curriculum.subjects.map((item) => {
    return item.subjects.map((e) => {
      return <option>{e.code}</option>
    })
  })


  const subjectOptionB = dataCS.curriculum.subjects.map((item) => {
    return item.subjects.map((e) => {
      return <option>{e.name}</option>
    })
  })

  useEffect(() => { document.body.style.backgroundColor = 'lightblue' }, [])

  const myLabels = ["monday", "tuesday", "wednesday", "thursday", "friday"];
  const [data, setData] = useState({});
  useEffect(() => {
    setData({
      labels: myLabels,
      datasets: [
        {
          label: "The Level",
          data: [21, 53, 65, 12, 32]
        }
      ]
    });
  }, []);
  console.log(data.datasets);


  return (

    <Container>
      <h1 style={{ color: "black" }, { textAlign: 'center' }} >MY GPA</h1>
      <Row>
        <Col style={{ backgroundColor: "#F7EBC8" }}>
          <Form>
            <Row className="mb-3">
              <Form.Group className="mb-3" as={Col} controlId="formsemester">
                <Form.Label>Semester</Form.Label>
                <Form.Select aria-label="Default select example" ref={semRef}  >
                  {semesOptions}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" as={Col} controlId="formItem">
                <Form.Label>Group Name</Form.Label>
                <Form.Select aria-label="Default select example" ref={groupRef} >
                  {subjectOption}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" as={Col} controlId="formItem">
                <Form.Label>Subject code</Form.Label>
                <Form.Select aria-label="Default select example" ref={codeRef} onChange={subjectChange}>
                  {subjectOptionA}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" as={Col} controlId="formPrice">
                <Form.Label>Subject name</Form.Label>
                <Form.Control type="string" placeholder="Subject Name" ref={subjectNRef} />
              </Form.Group>

              <Form.Group className="mb-3" as={Col} controlId="formDiscount">
                <Form.Label>Grade</Form.Label>
                <Form.Select aria-label="Default select example" ref={gradeRef} >
                  {gradeOptions}
                </Form.Select>
              </Form.Group>
            </Row>

            <div className="d-grid gap-2">
              {"\n"}
              <Button variant="primary" size="lg" onClick={addItem} >
                Add
              </Button>
            </div>

            <Form.Group className="mb-3" as={Col} controlId="allgpa">
              <Form.Label>MY GPAC</Form.Label>
              <Form.Control type="string" placeholder="Add for calcuting GPAC" ref={allgpaRef} />
            </Form.Group>
          </Form>

        </Col>

        <Table1 data={dataItems} setDataItems={setDataItems} />
        <Table2 data={dataItems22019} setDataItems={setdataItems22019} />
        <Table7 data={dataItems32019} setDataItems={setdataItems32019} />
        <Table3 data={dataItems12020} setDataItems={setdataItems12020} />
        <Table4 data={dataItems22020} setDataItems={setdataItems22020} />
        <Table8 data={dataItems32020} setDataItems={setdataItems32020} />
        <Table5 data={dataItems12021} setDataItems={setdataItems12021} />
        <Table6 data={dataItems22021} setDataItems={setdataItems22021} />
        <Table9 data={dataItems32021} setDataItems={setdataItems32021} />



        <div style={{ height: "500px", width: "500px" }}>
        <h3> Charts</h3>
          {/* {data.datasets ? <Line data={data} /> : ""} */}
        </div>




      </Row>
    </Container>


  )
}

export default App;
