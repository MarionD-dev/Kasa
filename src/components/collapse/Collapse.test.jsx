
import Collapse from './index'
import { render, screen, fireEvent } from '@testing-library/react'

describe('Collapse', () => {
    it('le contenu est caché par défaut', () => {
        render(<Collapse title="Test">Contenu du collapse</Collapse>)
        const content = screen.queryByText('Contenu du collapse')
        expect(content).not.toBeInTheDocument()
    })
    it('le contenu s\'affiche après un clic', () => {
    render(<Collapse title="Test" content="Contenu du collapse" />)
    fireEvent.click(screen.getByText('Test'))
    expect(screen.getByText('Contenu du collapse')).toBeInTheDocument()
})
it('le contenu se cache après deux clics', () => {
    render(<Collapse title="Test" content="Contenu du collapse" />)
    fireEvent.click(screen.getByText('Test'))
    fireEvent.click(screen.getByText('Test'))
    expect(screen.queryByText('Contenu du collapse')).not.toBeInTheDocument()
})
})