import { render, screen } from '@testing-library/react';
import BasicChartComponent from './BasicChart.component';
import { BasicChartTexts } from './BasicChart.texts';

describe("BasicChart tests", () => {
  it.only("proves existance", () => {
    render(<BasicChartComponent/>)
    expect(screen.getByText(BasicChartTexts.get('firstTitle'))).toBeInTheDocument()
  })
});
