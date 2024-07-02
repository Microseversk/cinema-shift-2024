import Button from './shared/Button/Button';

function App() {
  return (
    <>
      <Button variant="contained">contained</Button>
      <Button variant="contained" disabled>
        contained & disabled
      </Button>
      <Button variant="contained" theme="secondary">
        contained secondary
      </Button>
      <Button variant="contained" theme="secondary" disabled>
        contained secondary & disabled
      </Button>
      <br />
      <br />
      <Button variant="link">link</Button>
      <Button variant="link" disabled>
        link & disabled
      </Button>
      <Button variant="link" theme="secondary">
        link secondary
      </Button>
      <Button variant="link" theme="secondary" disabled>
        link secondary & disabled
      </Button>
      <br />
      <br />
      <Button variant="outlined">outlined</Button>
      <Button variant="outlined" disabled>
        outlined & disabled
      </Button>
      <Button variant="outlined" theme="secondary">
        outlined secondary
      </Button>
      <Button variant="outlined" theme="secondary" disabled>
        outlined secondary & disabled
      </Button>
      <br />
      <br />
      <Button variant="text">text</Button>
      <Button variant="text" disabled>
        text & disabled
      </Button>
      <Button variant="text" theme="secondary">
        text secondary
      </Button>
      <Button variant="text" theme="secondary" disabled>
        text secondary & disabled
      </Button>
    </>
  );
}

export default App;
