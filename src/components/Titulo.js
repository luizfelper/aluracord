import appConfig from '../../config.json';

export default function Titulo(props) {
    const Tag = props.tag || 'h1';
    return (
      <>
        <Tag>{props.children}</Tag>
        {/* No lugar de "Cabeçalho" tem h2. */}
        <style jsx>{`
          ${Tag} {
            color: ${appConfig.theme.colors.neutrals['100']};
            font-size: 24px;
            font-weight: 600px;
          }
        `}</style>
      </>
    );
  }