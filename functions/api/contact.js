export async function onRequestPost(context) {
  try {
    // Adiciona headers CORS
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Content-Type': 'application/json'
    };

    // Handle preflight requests
    if (context.request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    const { name, email, phone, company, message } = await context.request.json();

    // Validações básicas
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Por favor, preencha todos os campos obrigatórios' }), 
        { status: 400, headers: corsHeaders }
      );
    }

    // Monta o corpo do email
    const emailBody = `
      Novo contato via site:
      
      Nome: ${name}
      Email: ${email}
      Telefone: ${phone || 'Não informado'}
      Empresa: ${company || 'Não informada'}
      
      Mensagem:
      ${message}
    `;

    try {
      // Envia o email usando o Cloudflare Email Routing
      await context.env.CLOUDFLARE_EMAIL.send({
        to: ['contato@conectaone.com'],
        from: 'site@conectaone.com',
        subject: `Novo Contato Site - ${name}`,
        text: emailBody,
      });

      return new Response(
        JSON.stringify({ 
          success: true, 
          message: 'Mensagem enviada com sucesso! Nossa equipe responderá em até 24 horas úteis.' 
        }), 
        { headers: corsHeaders }
      );
    } catch (emailError) {
      console.error('Erro ao enviar email:', emailError);
      return new Response(
        JSON.stringify({ 
          error: 'Não foi possível enviar sua mensagem. Por favor, tente novamente mais tarde ou entre em contato pelo WhatsApp.' 
        }), 
        { status: 500, headers: corsHeaders }
      );
    }
  } catch (error) {
    console.error('Erro ao processar requisição:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Erro ao processar sua solicitação. Por favor, tente novamente ou use outro método de contato.' 
      }), 
      { 
        status: 500, 
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        } 
      }
    );
  }
} 