import "../App.css";
import { Button, ButtonGroup, Center } from "@chakra-ui/react";
function createArrayOfSize(n) {
  return new Array(n).fill(0);
}

function Pagination({ total, current, setPage }) {
  let pages = createArrayOfSize(total).map((a, i) => {
    return (
      <Button
        key={i}
        onClick={() => setPage(i + 1)}
        isDisabled={current === i + 1}
        data-testid="page-btn"
      >
        {i + 1}
      </Button>
    );
  });
  const next = (
    <Button
      isDisabled={current === total}
      onClick={() => {
        setPage(current + 1);
      }}
    >
      Next
    </Button>
  );
  const prev = (
    <Button
      isDisabled={current === 1}
      onClick={() => {
        setPage(current - 1);
      }}
      z
    >
      Prev
    </Button>
  );
  return (
    <Center mt={"30px"} mb={"30px"}>
      {" "}
      <ButtonGroup className="pagination">
        {prev}
        {pages}
        {next}
      </ButtonGroup>
    </Center>
  );
}

export default Pagination;
