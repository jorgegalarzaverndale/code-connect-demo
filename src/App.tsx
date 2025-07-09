import { Button, Dialog, IconStar } from "ui";
import { useState } from "react";

function App() {
  const handleClick = () => {
    // do nothing
  };

  const [showDialog, setShowDialog] = useState(false);

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "2rem",
        minHeight: "100vh",
        alignItems: "center",
      }}
    >
      <h2>Buttons</h2>
      {/* Primary Buttons */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <h3>Primary</h3>
        <Button
          variant="Primary"
          size="Medium"
          label="Medium"
          onClick={handleClick}
        />
        <Button
          variant="Primary"
          size="Small"
          label="Small"
          onClick={handleClick}
        />
        <Button
          variant="Primary"
          size="Medium"
          iconStart={<IconStar />}
          label="Icon Start"
          onClick={handleClick}
        />
        <Button
          variant="Primary"
          size="Small"
          iconEnd={<IconStar />}
          label="Icon End"
          onClick={handleClick}
        />
        <Button
          variant="Primary"
          size="Medium"
          state="Disabled"
          label="Disabled"
          onClick={handleClick}
        />
      </div>

      {/* Secondary Buttons */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <h3>Secondary</h3>
        <Button
          variant="Secondary"
          size="Medium"
          label="Medium"
          onClick={handleClick}
        />
        <Button
          variant="Secondary"
          size="Small"
          label="Small"
          onClick={handleClick}
        />
        <Button
          variant="Secondary"
          size="Medium"
          iconStart={<IconStar />}
          label="Icon Start"
          onClick={handleClick}
        />
        <Button
          variant="Secondary"
          size="Small"
          iconEnd={<IconStar />}
          label="Icon End"
          onClick={handleClick}
        />
        <Button
          variant="Secondary"
          size="Medium"
          state="Disabled"
          label="Disabled"
          onClick={handleClick}
        />
      </div>

      {/* Inverse Buttons */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <h3>Inverse</h3>
        <Button
          variant="Inverse"
          size="Medium"
          label="Medium"
          onClick={handleClick}
        />
        <Button
          variant="Inverse"
          size="Small"
          label="Small"
          onClick={handleClick}
        />
        <Button
          variant="Inverse"
          size="Medium"
          iconStart={<IconStar />}
          label="Icon Start"
          onClick={handleClick}
        />
        <Button
          variant="Inverse"
          size="Small"
          iconEnd={<IconStar />}
          label="Icon End"
          onClick={handleClick}
        />
        <Button
          variant="Inverse"
          size="Medium"
          state="Disabled"
          label="Disabled"
          onClick={handleClick}
        />
      </div>

      {/* Dialog Example */}
      <div style={{ marginTop: "2rem" }}>
        <Button
          variant="Secondary"
          size="Medium"
          label="Open Dialog"
          onClick={() => setShowDialog(true)}
        />
      </div>

      <Dialog
        open={showDialog}
        onClose={() => setShowDialog(false)}
        title="Here is a headline"
        actions={
          <>
            <Button
              variant="Inverse"
              size="Small"
              label="Cancel"
              onClick={() => setShowDialog(false)}
            />
            <Button
              variant="Primary"
              size="Medium"
              label="Action"
              onClick={() => setShowDialog(false)}
            />
          </>
        }
      >
        Here is some content. Here is some content. Here is some content. Here
        is some content. Here is some content. Here is some content.
      </Dialog>

      {/* More components will be listed here */}
    </main>
  );
}
export default App;
