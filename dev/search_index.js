var documenterSearchIndex = {"docs":
[{"location":"#NeuralQuantumState.jl-1","page":"NeuralQuantumState.jl","title":"NeuralQuantumState.jl","text":"","category":"section"},{"location":"#NQS-Settings-1","page":"NeuralQuantumState.jl","title":"NQS Settings","text":"","category":"section"},{"location":"#","page":"NeuralQuantumState.jl","title":"NeuralQuantumState.jl","text":"NETSETTINGS","category":"page"},{"location":"#NeuralQuantumState.NETSETTINGS","page":"NeuralQuantumState.jl","title":"NeuralQuantumState.NETSETTINGS","text":"NETSETTINGS\n\nGenerate settings by specifying values for non-default fields. Parsed with Parameters.jl.\n\nArguments\n\nmodelname::String: name of model (see src/weights.jl).\ntest_iter::Int: Number of independent consecutive Carleo/Troyer runs.\nrepetitions::Int: Number of wavefunction optimizations.\nn::Int: Number of visible neurons.\nα::Int: Hidden unit density (No. hidden / No. visible).\nγ_init::Float: Learning parameter (default: 0.05).\nγ_decay::Float: Decay of learning parameter (default: 1.0).\nmc_trials::Int: Number of variational derivatives PER repetition PER CPU.\nmc_steps::Int: Number of MH steps per sample (default: n).\nregulator::Float: Regularization parameter of the S-matrix.\ninit_therm_steps::Int: Burn-in steps on first repetition.\ntherm_steps::Int: Burn-in on other repetitions.\nnflips::Int: Number of flips to be performed per mc_trial (default: 1).\npbc::Bool: Periodic boundary conditions for lattice (default: true).\nmag0::Bool: Sample only in sector ∑s_z = 0 (default: false).\nmfree::Bool: Matrix-free inversion (default: true). Overridden to false.   when iterative_inverse = false.\niterative_inverse::Bool: Invert S-matrix iteratively (default: true).   Assumed true when mfree = true.\ncalc_stat::Bool: Calculate single-site statistics and correlations after   last repetition.\nstat_samples::Int: No. of samples PER CPU for statistics calculation.\nsave_figures::Bool: Save statistics in figure (default: true).\nwritetofile::Bool: Write optimized NQS parameters, energy[, statistics] to a   file.\n\nExamples\n\njulia> NetSettings = NETSETTINGS(\n         modelname = \"U_afh\",\n         repetitions =1000,\n         n = 6,\n         α = 3,\n         mc_trials = 500,\n         init_therm_steps = 100,\n         therm_steps = 50,\n         stat_samples = 2000)\nNETSETTINGS{String,Int64,Float64,Bool}\nmodelname: String \"U_afh\"\ntest_iter: Int64 1\nrepetitions: Int64 1000\nn: Int64 6\nα: Int64 3\nm: Int64 18\ndim_rbm: Int64 132\nγ_init: Float64 0.05\nγ_decay: Float64 1.0\nmc_trials: Int64 500\nmc_steps: Int64 6\nregulator: Float64 0.1\ninit_therm_steps: Int64 100\ntherm_steps: Int64 50\nnflips: Int64 1\npbc: Bool true\nmag0: Bool false\nmfree: Bool true\niterative_inverse: Bool true\ncalc_stat: Bool true\nstat_samples: Int64 5000\nsave_figures: Bool true\nwritetofile: Bool true\n\n\n\n\n\n","category":"type"},{"location":"#Function-1","page":"NeuralQuantumState.jl","title":"Function","text":"","category":"section"},{"location":"#","page":"NeuralQuantumState.jl","title":"NeuralQuantumState.jl","text":"run_NQS(NetSettings)","category":"page"},{"location":"#NeuralQuantumState.run_NQS-Tuple{Any}","page":"NeuralQuantumState.jl","title":"NeuralQuantumState.run_NQS","text":"run_NQS(NetSettings)\n\nArguments\n\n- `NetSettings`: The settings struct containing all possible network settings.\n\n\n\n\n\n","category":"method"}]
}
