import ZapApi from '../../lib/ZapApi';

class SessionController {
  async store(req, res) {
    const { nameSession } = req.params;
    await ZapApi.createSession(nameSession);
    return res.json({ message: 'Sessão criada' });
  }

  async index(req, res) {
    return res.json({});
  }

  async show(req, res) {
    return res.json({});
  }

  async delete(req, res) {
    return res.json({});
  }

  async update(req, res) {
    return res.json({});
  }
}

export default new SessionController();
