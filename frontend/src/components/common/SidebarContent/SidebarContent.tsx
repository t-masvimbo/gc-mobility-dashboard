import styled from '@emotion/styled';

export const SidebarContent = styled.aside`
  padding: 1rem;
  background-color: #c4d885;

  // enable scrolling within the sidebar if content overflows
  overflow: auto;
  box-sizing: border-box;
  height: 100%;

  // sidebar title
  h1 {
    font-size: 1rem;
    font-weight: 600;
    color: var(--color-text-primary);
    text-align: left;
    line-height: 1.2;

    position: sticky;
    margin: -1rem;
    top: -1rem;
    background-color: #c4d885;
    padding: 1.25rem 1rem 0.5rem;
    border-radius: var(--surface-radius) var(--surface-radius) 0 0;
  }

  // sidebar section titles
  h2 {
    font-size: 0.875rem;
    font-weight: 600;
    margin-top: 1.5rem;
    margin-bottom: 0.25rem;
    color: var(--color-text-secondary);
    text-align: left;
    line-height: 1.2;
  }

  // field labels
  label {
    font-size: 0.875rem;
  }

  .selection-info {
    font-size: 0.875rem;
    margin: 0.5rem 0;
    color: var(--color-text-secondary);
  }
  .comparison-toggle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1rem 0;
    padding: 0.5rem;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 4px;

    label {
      font-weight: 600;
    }
  }
`;
