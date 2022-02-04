import { useState, useRef, useEffect } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { FaTrash } from 'react-icons/fa';
import { FiPlusCircle} from "react-icons/fi";

const styles = {
  textCenter: { textAlign: 'center' },
  textRight: { textAlign: 'right' }
}

function Table6({ data, setDataItems }) {
  const [dataRows, setDataRows] = useState();
  const [totalGPA, setTotalGPA] = useState(0);
  //const [totalDiscount, setTotalDiscount] = useState(0);

 
  useEffect(() => {
    let gpa = 0
    let s = 0
    let sumGPA = 0
    const z = data.map((v, i) => {
      s += 1
      gpa += parseFloat(v.grdn)
      sumGPA = parseFloat(gpa / s).toFixed(2)
      return (
        <tr key={i}>
          <td><FaTrash onClick= {deleteClick}/></td>
          <td style={styles.textCenter}>{v.sem}</td>
          <td style={styles.textCenter}>{v.code}</td>
          <td style={styles.textRight}>{v.subN}</td>
          <td style={styles.textRight}>{v.grd}</td>
        </tr>
        
      );
    });

    setDataRows(z);
    setTotalGPA(sumGPA)
    //setTotalDiscount(sumD, 10)
  }, [data]);

  

  const deleteClick = (i) => {
    data.splice(i, 1)
    setDataItems([...data])
  }
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const clearTable = () => {
    setDataItems([]);
    setDataRows([]);
  };


  return (
    <Container>
      <Row>
      <Col>
          <h3>Semester 2/2021</h3>
        </Col>
        <Col style={styles.textRight}>
          <Button onClick={clearTable} variant="danger">
            Clear
          </Button>
        </Col>
      </Row>
      <Table striped bordered hover>
        <thead>
          <tr class="table-light">
            <th></th>
            <th style={styles.textCenter}>Semester</th>
            <th style={styles.textCenter}>Subject</th>
            <th style={styles.textCenter}>Title</th>
            <th style={styles.textCenter}>Grade</th>

          </tr>
        </thead>
        <tbody class="table-warning">{dataRows}</tbody>
        <tfoot>
          <tr class="table-light">
            <th colSpan={3}></th>
            <th style={styles.textRight}>GPA</th>
          <th class="text-danger" style={styles.textRight}>{totalGPA}</th>
          </tr>
        </tfoot>
      </Table>
    </Container>
  );
}

export default Table6;
