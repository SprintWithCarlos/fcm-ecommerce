#!/bin/bash
capitalize()
{
  printf '%s' "$1" | head -c 1 | tr [:lower:] [:upper:]
  printf '%s' "$1" | tail -c '+2'
}
mkdir -p design-system/$1/$2
cat > design-system/$1/$2/$2.sass <<EOF
.$2
  display: block

EOF
Name=$(capitalize $2)
cat > design-system/$1/$2/$Name.spec.tsx <<EOF
import { render, screen } from "@testing-library/react";
import $Name from "./$Name";

describe("$Name", () => {
  beforeEach(() => {
    render(<$Name />);
  });

  test("renders ", async () => {
    const $2Component = screen.queryByTestId(/$2/i);
    expect($2Component).toBeInTheDocument();
  });
});

EOF

cat > design-system/$1/$2/$Name.tsx <<EOF
import './$2.sass';
const $Name:React.FC = () => {
  console.log("Component")
  return <div data-testid="$2" className="$2">$2</div>;
};
export default $Name;
EOF