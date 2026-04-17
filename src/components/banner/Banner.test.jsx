import Banner from "./index";
import { render, screen } from "@testing-library/react";

describe("Banner", () => {
  it("renders the banner image", () => {
    render(<Banner />);
    const bannerImage = screen.getByAltText("Banner Image");
    expect(bannerImage).toBeInTheDocument();
  });
  it("affiche le texte quand la prop text est passée", () => {
    render(<Banner text="Chez vous, partout et ailleurs" />)
    expect(screen.getByText("Chez vous, partout et ailleurs")).toBeInTheDocument()
})
it("n'affiche pas de texte quand la prop text n'est pas passée", () => {
    render(<Banner />)
    const text = screen.queryByRole('paragraph')
    expect(text).not.toBeInTheDocument()
})
})